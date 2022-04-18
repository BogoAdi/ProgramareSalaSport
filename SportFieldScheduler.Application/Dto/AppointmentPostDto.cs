using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Application.Dto
{
    public class AppointmentPostDto
    {
        //public Guid Id { get; set; }
        public Guid SportFieldId { get; set; }
        public Guid UserId { get; set; }
        public DateTime Date { get; set; }
        public int Hours { get; set; }
        public double TotalPrice { get; set; }
        public string ClientName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
