using MediatR;
using SportFieldScheduler.Application.Commands.SportFields;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.ComamandHandlers.SportFields
{
    public class CreateSportFieldCommandHandler : IRequestHandler<CreateSportFieldCommand, SportField>
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
                Id = Guid.NewGuid(),
                Address= command.Address,
                City = command.City,
                PricePerHour =command.PricePerHour,
                Category=command.Category,
                Description= command.Description,
                Appointments=new List<Appointment>()

            };
           var result= await _repository.AddSportFieldAsync(sportField);
            return await Task.FromResult(result);
        }
    }
}
