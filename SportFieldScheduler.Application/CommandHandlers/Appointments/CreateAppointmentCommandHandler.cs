using MediatR;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.Appointments
{
    public class CreateAppointmentCommandHandler :  IRequestHandler<CreateAppointmentCommand, Guid>
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
            await _repository.AddAppointmentAsync(appointment);
            return await Task.FromResult(appointment.Id);
        }
    }
}
