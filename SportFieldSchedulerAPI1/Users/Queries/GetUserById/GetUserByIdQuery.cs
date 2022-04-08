using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Users.Queries.GetUserById
{
    public class GetUserByIdQuery :Entity, IRequest<User>
    {
        
    }
}
