using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Commands.SportFields
{
    public class DeleteSportFieldCommand : IRequest<SportField>
    {
        public Guid Id { get; set; }
    }
}
