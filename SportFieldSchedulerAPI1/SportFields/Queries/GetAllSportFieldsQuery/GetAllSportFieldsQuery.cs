using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.SportFields.Queries.GetAllSportFieldsQuery
{
    public class GetAllSportFieldsQuery :IRequest<List<SportField>>
    {

    }
}
