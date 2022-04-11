using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.SportFields.Queries
{
    public class GetAllSportFieldsQuery : IRequest<List<SportField>>
    {

    }
}
