using MediatR;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldSchedulerAPI1.Appointments.Queries.GetAllAppointments
{
    public class GetAllAppointmentsQueryHandler : IRequestHandler<GetAllAppointmentsQuery, List<Appointment>>
    {
        private IAppointmentRepository _repository;

        public GetAllAppointmentsQueryHandler(IAppointmentRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<Appointment>> Handle(GetAllAppointmentsQuery query, CancellationToken cancellationToken)
        {
            return await _repository.GetAllAppointmentsAsync();
        }
    }
}
