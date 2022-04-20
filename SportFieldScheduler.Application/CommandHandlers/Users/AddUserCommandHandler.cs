using MediatR;
using SportFieldScheduler.Application.Commands.Users;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.Users
{
    public class AddUserCommandHandler : IRequestHandler<AddUserCommand, User>
    {
         private IUserRepository _users;

        public AddUserCommandHandler(IUserRepository users)
        {
            _users = users;
        }
        public async  Task<User> Handle(AddUserCommand command, CancellationToken cancellationToken)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
               Email = command.Email,
               Password = command.Password,
               Username = command.Username,
               Name = command.Name,
               Appointments=command.Appointments,

            };
            var result = await _users.AddUserAsync(user);
            return await Task.FromResult(result);
        }
    }
}
