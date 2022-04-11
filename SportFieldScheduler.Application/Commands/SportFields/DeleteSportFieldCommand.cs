using MediatR;

namespace SportFieldScheduler.Application.Commands.SportFields
{
    public class DeleteSportFieldCommand : IRequest<Guid>
    {
        public Guid Id { get; set; }
    }
}
