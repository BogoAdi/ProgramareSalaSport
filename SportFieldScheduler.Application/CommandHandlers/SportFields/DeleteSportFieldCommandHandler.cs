using MediatR;
using SportFieldScheduler.Application.Commands.SportFields;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.SportFields
{
    public class DeleteSportFieldCommandHandler : IRequestHandler<DeleteSportFieldCommand, Guid>
    {
        private ISportFieldRepository _repository;
        public DeleteSportFieldCommandHandler(ISportFieldRepository repository)
        {
            _repository = repository;
        }
        public async Task<Guid> Handle(DeleteSportFieldCommand command, CancellationToken cancellationToken)
        {
            await _repository.RemoveSportFieldAsync(command.Id);
            return await Task.FromResult(command.Id);
        }

    }
}
