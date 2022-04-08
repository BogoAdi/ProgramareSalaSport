using MediatR;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.Appointments.Commands
{
    public class DeleteAppointmentCommandHandler : Entity, IRequestHandler<DeleteAppointmentCommand, Guid>
    {
        private IAppointmentRepository _repository;
        public DeleteAppointmentCommandHandler(IAppointmentRepository repository)
        {
            _repository = repository;
        }
        public async Task<Guid> Handle(DeleteAppointmentCommand command, CancellationToken cancellationToken)
        {
            _repository.RemoveAppointmentAsync(command.Id);

            return await Task.FromResult(command.Id);
        }
    }
}
