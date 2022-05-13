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
            var sportfield = await _sportFieldRepository.GetSportFieldByIdAsync(command.IdField);

            var appointment = new Appointment
            {
                Id = Guid.NewGuid(),
                SportFieldId = command.IdField,
                UserId = command.IdUser,
                Date = command.Date,
                Hours = command.Hours,
                TotalPrice = sportfield.PricePerHour * command.Hours
            };
            var result= await _repository.AddAppointmentAsync(appointment);
            //Mapper
            return await Task.FromResult(result);
        }
    }
}
