using MediatR;
using SportFieldScheduler.Application.Commands.Users;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.Users
{
    public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand, User>
    {
        private IUserRepository _users;

        public DeleteUserCommandHandler(IUserRepository users)
        {
            _users = users;
        }
        public async Task<User> Handle(DeleteUserCommand command, CancellationToken cancellationToken)
        {
            var result = await _users.RemoveUserAsync(command.Id);
            
            return await Task.FromResult(result);
        }
    }
}
