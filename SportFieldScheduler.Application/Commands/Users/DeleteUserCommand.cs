using MediatR;

namespace SportFieldScheduler.Application.Commands.Users
{
    public class DeleteUserCommand :  IRequest<Guid>
    {
        public Guid Id { get; set; }
    }
}
