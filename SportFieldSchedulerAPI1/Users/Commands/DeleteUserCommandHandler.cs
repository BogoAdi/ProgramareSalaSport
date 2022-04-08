using MediatR;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.Users.Commands
{
    public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand, Guid>
    {
        private IUserRepository _users;

        public DeleteUserCommandHandler(IUserRepository users)
        {
            _users = users;
        }
        public async Task<Guid> Handle(DeleteUserCommand command, CancellationToken cancellationToken)
        {
            _users.RemoveUserAsync(command.Id);
            
            return await Task.FromResult(command.Id);
        }
    }
}
