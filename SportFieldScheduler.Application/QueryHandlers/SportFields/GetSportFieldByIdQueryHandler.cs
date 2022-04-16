using AutoMapper;
using MediatR;
using SportFieldScheduler.Application.SportFields.Queries;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.QueryHandlers.SportFields
{
    public class GetSportFieldByIdQueryHandler : IRequestHandler<GetSportFieldByIdQuery, SportField>
    {
        private ISportFieldRepository _repository;
        private IMapper _mapper;
        public GetSportFieldByIdQueryHandler(ISportFieldRepository repository,IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<SportField> Handle(GetSportFieldByIdQuery query, CancellationToken cancellationToken)
        {
            var result= await _repository.GetSportFieldById(query.Id); ;
            return result;
        }
    }
}
