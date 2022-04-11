using MediatR;
using SportFieldScheduler.Application.Queries.Users;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.QueryHandlers.Users
{
    public class GetUserByIdQueryHandler : IRequestHandler<GetUserByIdQuery, User>
    {
        private IUserRepository _users;
        public GetUserByIdQueryHandler(IUserRepository users)
        {
            _users = users;
        }

        public async Task<User> Handle(GetUserByIdQuery query, CancellationToken cancellationToken)
        {
            return await _users.GetUserByIdAsync(query.Id);
        }
    }
}
