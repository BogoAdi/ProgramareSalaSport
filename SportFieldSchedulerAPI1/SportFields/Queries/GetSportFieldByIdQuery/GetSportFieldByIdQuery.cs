using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.SportFields.Queries.GetSportFieldByIdQuery
{
    public class GetSportFieldByIdQuery : Entity, IRequest<SportField>
    {

    }
}
