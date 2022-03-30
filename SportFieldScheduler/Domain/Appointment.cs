using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Domain
{
    public class Appointment : Entity
    {
        public Guid IdField { get; set; }
        public DateTime Date { get; set; }
        public int Hours { get; set; }
        public double TotalPrice { get; set; }
        public string ClientName { get; set; }
        public string PhoneNumber { get; set; }
       
        public override string ToString()
        {
            return "The appointment with the ID: "+Id + "for the date: " + Date + " for " + Hours + " hours " + ClientName+ " FieldID "+IdField;
        }
    }
}
