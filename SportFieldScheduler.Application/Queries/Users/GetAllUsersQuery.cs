using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Queries.Users
{
    public class GetAllUsersQuery :IRequest<List<User>>
    {
       
    }
}
