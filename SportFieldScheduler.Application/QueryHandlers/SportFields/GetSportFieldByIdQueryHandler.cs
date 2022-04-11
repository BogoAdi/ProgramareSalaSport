using MediatR;
using SportFieldScheduler.Application.SportFields.Queries;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.QueryHandlers.SportFields
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
