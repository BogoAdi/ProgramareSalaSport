using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Commands.Appointments
{
    public class CreateAppointmentCommand : IRequest<Appointment>
        {
            public Guid Id { get; set; }
            public Guid SportFieldId { get; set; }
            public Guid UserId { get; set; }
            public DateTime Date { get; set; }
            public int Hours { get; set; }
            public double TotalPrice { get; set; }
            //public string ClientName { get; set; }
            //public string PhoneNumber { get; set; }
            //
        }
}
