using MediatR;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.Appointments
{
    public class CreateAppointmentCommandHandler :  IRequestHandler<CreateAppointmentCommand, Appointment>
    {
        private IAppointmentRepository _repository;
        private ISportFieldRepository _sportFieldRepository;

        public CreateAppointmentCommandHandler(IAppointmentRepository repository,ISportFieldRepository sportFieldRepository)
        {
            _repository = repository;
            _sportFieldRepository = sportFieldRepository;
        }

        public async Task<Appointment> Handle(CreateAppointmentCommand command, CancellationToken cancellationToken)
        {
            var sportfield = await _sportFieldRepository.GetSportFieldById(command.IdField);
            
            if (sportfield.Appointments.Any(x=>x.Date == command.Date))
            {
                throw new InvalidOperationException($"Appointment already created at {command.Date}");
            }
            var appointment = new Appointment
            {
                Id = Guid.NewGuid(), // nu sunt sigur de asta
                SportFieldId = command.IdField,
                UserId = command.IdUser,
                ClientName = command.ClientName,
                PhoneNumber = command.PhoneNumber,
                Date = command.Date,
                Hours = command.Hours,
                TotalPrice = sportfield.PricePerHour * command.Hours
            };

           //   sportfield.Appointments.Add(appointment);
          //  await _sportFieldRepository.AddAppointmentAsync(sportfield,appointment);

            await _repository.AddAppointmentAsync(appointment);
            //Mapper
            return await Task.FromResult(appointment);
        }
    }
}
