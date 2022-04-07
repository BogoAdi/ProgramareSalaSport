using MediatR;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.Appointments.Queries.GetAppointmentById
{
    public class GetAppointmentByIdQueryHandler : IRequestHandler<GetAppointmentByIdQuery, Appointment>
    {

        private IAppointmentRepository _repository;

        public GetAppointmentByIdQueryHandler(IAppointmentRepository repository)
        {
            _repository = repository;
        }

        public async Task<Appointment> Handle(GetAppointmentByIdQuery query, CancellationToken cancellationToken)
        {
            var appointment = _repository.GetAppointmentByIdAsync(query.Appointment);

            return await appointment;
        }
    }
}
