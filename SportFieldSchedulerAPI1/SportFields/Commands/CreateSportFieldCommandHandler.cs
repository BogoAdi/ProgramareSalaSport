using MediatR;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.SportFields.Commands
{
    public class CreateSportFieldCommandHandler : Entity,IRequestHandler<CreateSportFieldCommand, SportField>
    {
        private ISportFieldRepository _repository;

        public CreateSportFieldCommandHandler(ISportFieldRepository repository)
        {
            _repository = repository;
        }
        public async Task<SportField> Handle(CreateSportFieldCommand command, CancellationToken cancellationToken)
        {
            var sportField = new SportField
            {
                Id = command.Id,
                Name = command.Name,
                Address= command.Address,
                PricePerHour=command.PricePerHour,
                Category=command.Category,
                Description= command.Description,
                Appointments=command.Appointments,
                City=command.City
            };
            _repository.AddSportFieldAsync(sportField);
            return await Task.FromResult(sportField);
        }
    }
}
