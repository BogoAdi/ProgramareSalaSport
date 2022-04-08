using MediatR;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.Users.Commands
{
    public class AddUserCommandHandler : IRequestHandler<AddUserCommand, Guid>
    {
         private IUserRepository _users;

        public AddUserCommandHandler(IUserRepository users)
        {
            _users = users;
        }
        public async  Task<Guid> Handle(AddUserCommand command, CancellationToken cancellationToken)
        {
            var user = new User
            {
                Id = command.Id,
               Email = command.Email,
               Password = command.Password,
               Username = command.Username,
               Name = command.Name,
               Appointments=command.Appointments,

            };
            _users.AddUserAsync(user);
            return await Task.FromResult(user.Id);
        }
    }
}
