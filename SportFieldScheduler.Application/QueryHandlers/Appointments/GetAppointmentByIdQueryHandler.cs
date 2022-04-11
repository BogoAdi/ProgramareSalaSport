using MediatR;
using SportFieldScheduler.Application.Queries.Appointments;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Application.QueryHandlers.Appointments
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
            var appointment = _repository.GetAppointmentByIdAsync(query.Id);

            return await appointment;
        }
    }
}
