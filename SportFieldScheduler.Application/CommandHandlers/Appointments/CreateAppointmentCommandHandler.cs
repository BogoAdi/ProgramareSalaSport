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
        private IUserRepository _userRepository;

        public CreateAppointmentCommandHandler(IAppointmentRepository repository
            ,ISportFieldRepository sportFieldRepository, IUserRepository userRepository)
        {
            _repository = repository;
            _sportFieldRepository = sportFieldRepository;
            _userRepository = userRepository;
        }

        public async Task<Appointment> Handle(CreateAppointmentCommand command, CancellationToken cancellationToken)
        {
            var sportfield = await _sportFieldRepository.GetSportFieldByIdAsync(command.SportFieldId);
            var user = await _userRepository.GetUserByIdAsync(command.SportFieldId);

            var appointment = new Appointment
            {
                Id = Guid.NewGuid(),
                SportFieldId = command.SportFieldId,
                UserId = command.UserId,
                Date = command.Date,
                Hours = command.Hours,
                TotalPrice = sportfield.PricePerHour * command.Hours,
                SportField=sportfield,
                User = user
            };
            var result= await _repository.AddAppointmentAsync(appointment);
            //Mapper
            return await Task.FromResult(result);
        }
    }
}
