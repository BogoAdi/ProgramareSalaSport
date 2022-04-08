using MediatR;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.SportFields.Queries.GetAllSportFieldsQuery
{
    public class GetAllSportFieldsQueryHandler : IRequestHandler<GetAllSportFieldsQuery, List<SportField>>
    {
        private ISportFieldRepository _repository;
        public GetAllSportFieldsQueryHandler(ISportFieldRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<SportField>> Handle(GetAllSportFieldsQuery query, CancellationToken cancellationToken)
        {
            return await _repository.GetAllSportFieldAsync();
            
        }
    }
}
