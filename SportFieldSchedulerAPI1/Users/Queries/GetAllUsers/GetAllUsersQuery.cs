using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Users.Queries.GetAllUsers
{
    public class GetAllUsersQuery :IRequest<List<User>>
    {
       
    }
}
