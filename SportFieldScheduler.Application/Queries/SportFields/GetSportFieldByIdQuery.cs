using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.SportFields.Queries
{
    public class GetSportFieldByIdQuery : IRequest<SportField>
    {
        public Guid Id { get; set; }
    }
}
