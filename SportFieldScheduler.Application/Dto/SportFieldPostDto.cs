using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Application.Dto
{
    public class SportFieldPostDto
    {
        public Guid Id { get; set; }
        //  public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public double PricePerHour { get; set; }
        public string Category { get; set; }
        public string? Description { get; set; }
        public List<Appointment> Appointments { get; set; }

    }
}
