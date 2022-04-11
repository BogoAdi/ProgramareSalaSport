using MediatR;
using SportFieldScheduler.Application.Queries.Users;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.QueryHandlers.Users
{
    public class GetAllUsersQueryHandler : IRequestHandler<GetAllUsersQuery, List<User>>
    {
        private IUserRepository _users;
        public GetAllUsersQueryHandler(IUserRepository users)
        {
            _users = users;
        }

        public async Task<List<User>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
        {
            return await _users.GetAllUsersAsync();
        }
    }
}
