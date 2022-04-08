using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Users.Commands
{
    public class DeleteUserCommand : Entity , IRequest<Guid>
    {

    }
}
