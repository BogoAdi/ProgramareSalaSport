using MediatR;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.Appointments.Commands
{
    public class CreateAppointmentCommandHandler : Entity, IRequestHandler<CreateAppointmentCommand, Guid>
    {
        private IAppointmentRepository _repository;

        public CreateAppointmentCommandHandler(IAppointmentRepository repository)
        {
            _repository = repository;
        }

        public async Task<Guid> Handle(CreateAppointmentCommand command, CancellationToken cancellationToken)
        {
            var appointment = new Appointment
            {
                Id = command.Id,
                IdField = command.IdField,
                IdUser = command.IdUser,
                ClientName = command.ClientName,
                PhoneNumber = command.PhoneNumber,
                Date = command.Date,
                Hours = command.Hours,
                TotalPrice = command.TotalPrice
            };
            _repository.AddAppointmentAsync(appointment);
            return await Task.FromResult(appointment.Id);
        }
    }
}
