using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.SportFields.Commands
{
    public class DeleteSportFieldCommand :Entity, IRequest<Guid>
    {

    }
}
