using MediatR;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.Appointments
{
    public class DeleteAppointmentCommandHandler :  IRequestHandler<DeleteAppointmentCommand, Guid>
    {
        private IAppointmentRepository _repository;
        public DeleteAppointmentCommandHandler(IAppointmentRepository repository)
        {
            _repository = repository;
        }
        public async Task<Guid> Handle(DeleteAppointmentCommand command, CancellationToken cancellationToken)
        {
            await _repository.RemoveAppointmentAsync(command.Id);

            return await Task.FromResult(command.Id);
        }
    }
}
