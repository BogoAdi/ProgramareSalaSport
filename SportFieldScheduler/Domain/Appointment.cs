using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Domain
{
    public class Appointment : Entity
    {
       // public Guid IdField { get; set; }
        public int IdField { get; set; }
        public DateTime Date { get; set; }
        public int Hours { get; set; }
        public float TotalPrice { get; set; }
        public string ClientName { get; set; }
        public string PhoneNumber { get; set; }
        public Appointment(DateTime date,int hours, float totalPrice, string clientName, string phoneNumber, int idField, int id) :base(id)
        { 
            Date = date;
            Hours = hours;
            TotalPrice = totalPrice;
            ClientName = clientName;
            PhoneNumber = phoneNumber;
            IdField = idField;
        }
        public string toString()
        {
            return "The Assignment with the id " + Id + " was created succesfully!";
        }
    }
}
