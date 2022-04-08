using MediatR;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.SportFields.Queries.GetSportFieldByIdQuery
{
    public class GetSportFieldByIdQueryHandler :Entity, IRequestHandler<GetSportFieldByIdQuery, SportField>
    {
        private ISportFieldRepository _repository;
        public GetSportFieldByIdQueryHandler(ISportFieldRepository repository)
        {
            _repository = repository;
        }
        public async Task<SportField> Handle(GetSportFieldByIdQuery query, CancellationToken cancellationToken)
        {
            return await _repository.GetSportFieldById(query.Id); ;
        }
    }
}
