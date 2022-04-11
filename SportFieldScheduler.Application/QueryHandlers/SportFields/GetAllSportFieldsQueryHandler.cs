using MediatR;
using SportFieldScheduler.Application.SportFields.Queries;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.QueryHandlers.SportFields
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
