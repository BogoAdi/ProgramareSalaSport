using MediatR;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.Appointments
{
    public class DeleteAppointmentCommandHandler :  IRequestHandler<DeleteAppointmentCommand, Appointment>
    {
        private IAppointmentRepository _repository;
        public DeleteAppointmentCommandHandler(IAppointmentRepository repository)
        {
            _repository = repository;
        }
        public async Task<Appointment> Handle(DeleteAppointmentCommand command, CancellationToken cancellationToken)
        {
            var deleted = await _repository.RemoveAppointmentAsync(command.Id);

            return await Task.FromResult(deleted);
        }
    }
}
