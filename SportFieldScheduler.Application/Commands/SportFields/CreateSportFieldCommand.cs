using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Commands.SportFields
{
    public class CreateSportFieldCommand :  IRequest<SportField>
    {
        public Guid Id { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public double PricePerHour { get; set; }
        public string Category { get; set; }
        public string? Description { get; set; }
        public List<Appointment> Appointments { get; set; }
        public string Img { get; set; }
    }
}
