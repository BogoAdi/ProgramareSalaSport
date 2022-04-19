using MediatR;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Application.CommandHandlers.Appointments
{
    public class UpdateAppointmentCommandHandler : IRequestHandler<UpdateAppointmentCommand, Appointment>
    {
        private IAppointmentRepository _repository;
        private ISportFieldRepository _sportFieldRepository;

        public UpdateAppointmentCommandHandler(IAppointmentRepository repository,ISportFieldRepository sportFieldRepository)
        {
            _repository = repository;
            _sportFieldRepository = sportFieldRepository;
        }
        public async Task<Appointment> Handle(UpdateAppointmentCommand command, CancellationToken cancellationToken)
        {
            var sportfield = await _sportFieldRepository.GetSportFieldById(command.IdField);

            var appointment = new Appointment
            {
                Id = command.Id,
                ClientName = command.ClientName,
                PhoneNumber = command.PhoneNumber,
            };
          var updated=  await _repository.UpdateAppointment(command.Id,appointment);
            //Mapper
            return await Task.FromResult(updated);
        }
    }
}
