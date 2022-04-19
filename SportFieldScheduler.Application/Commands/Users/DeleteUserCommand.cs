using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Commands.Users
{
    public class DeleteUserCommand :  IRequest<User>
    {
        public Guid Id { get; set; }
    }
}
