using MediatR;
using SportFieldScheduler.Application.Commands.SportFields;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Application.CommandHandlers.SportFields
{
    public class UpdateSportFieldCommandHandler : IRequestHandler<UpdateSportFieldCommand, SportField>
    {
        private ISportFieldRepository  _sportfield;
        public UpdateSportFieldCommandHandler(ISportFieldRepository sportFieldRepository)
        {
            _sportfield = sportFieldRepository;
        }
        public async Task<SportField> Handle(UpdateSportFieldCommand command, CancellationToken cancellationToken)
        {
            var sportField = new SportField
            {
                Id = command.Id,
                Address = command.Address,
                City = command.City,
                PricePerHour = command.PricePerHour,
                Category = command.Category,
                Description = command.Description,
                Appointments = new List<Appointment>()

            };
            var result = await _sportfield.UpdateSportFieldAsync(command.Id, sportField);
            return await Task.FromResult(result);
        }
    }
}
