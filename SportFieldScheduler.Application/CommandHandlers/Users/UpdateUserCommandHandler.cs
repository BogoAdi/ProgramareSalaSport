using MediatR;
using SportFieldScheduler.Application.Commands.Users;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.CommandHandlers.Users
{
    public class UpdateUserCommandHandler : IRequestHandler<UpdateUserCommand, User>
    {
        private IUserRepository _user;
        public UpdateUserCommandHandler(IUserRepository userRepository)
        {
            _user = userRepository;
        }
        public async Task<User> Handle(UpdateUserCommand command, CancellationToken cancellationToken)
        {

            var user = new User
            {
                Id = command.Id,
                Email = command.Email,
                Password = command.Password,
                Username = command.Username,
                Name = command.Name,
                Appointments = command.Appointments,

            };
            var result = await _user.UpdateUser(command.Id,user);
            return await Task.FromResult(result);
        }
    }
}
