using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Queries.Users
{
    public class GetUserByIdQuery : IRequest<User>
    {
        public Guid Id { get; set; }
    }
}
