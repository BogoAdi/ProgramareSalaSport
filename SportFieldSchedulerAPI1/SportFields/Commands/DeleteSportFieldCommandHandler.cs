using MediatR;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.SportFields.Commands
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
            _repository.RemoveSportFieldAsync(command.Id);
            return await Task.FromResult(command.Id);
        }

    }
}
