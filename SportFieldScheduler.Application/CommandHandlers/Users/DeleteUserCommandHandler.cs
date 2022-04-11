using MediatR;
using SportFieldScheduler.Application.Commands.Users;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.Users
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
            await _users.RemoveUserAsync(command.Id);
            
            return await Task.FromResult(command.Id);
        }
    }
}
