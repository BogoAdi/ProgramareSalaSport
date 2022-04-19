using MediatR;
using SportFieldScheduler.Application.Commands.SportFields;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.SportFields
{
    public class DeleteSportFieldCommandHandler : IRequestHandler<DeleteSportFieldCommand, SportField>
    {
        private ISportFieldRepository _repository;
        public DeleteSportFieldCommandHandler(ISportFieldRepository repository)
        {
            _repository = repository;
        }
        public async Task<SportField> Handle(DeleteSportFieldCommand command, CancellationToken cancellationToken)
        {
            var result=await _repository.RemoveSportFieldAsync(command.Id);
            return await Task.FromResult(result);
        }

    }
}
