using MediatR;
using SportFieldScheduler.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Application.Commands.SportFields
{
    public class UpdateSportFieldCommand :IRequest <SportField>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }    
        public string Address { get; set; }
        public string City { get; set; }
        public double PricePerHour { get; set; }
        public string Category { get; set; }
        public string? Description { get; set; }
        public string Img { get; set; }
        public List<Appointment> Appointments { get; set; }
    }
}
