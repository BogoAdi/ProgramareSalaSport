using MediatR;
using SportFieldScheduler.Application.Queries.Appointments;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.QueryHandlers.Appointments
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
