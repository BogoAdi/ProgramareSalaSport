

namespace SportFieldScheduler.Core.Domain
{
    public class Appointment : Entity
    {
       public Guid SportFieldId { get; set; }
       public Guid UserId { get; set; }
        public DateTime Date { get; set; }
        public int Hours { get; set; }
        public double TotalPrice { get; set; }
        //public User User { get; set; }
        //public SportField SportField { get; set; }
        
  
       
        public override string ToString()
        {
            return "The appointment with the ID: " + Id + "for the date: " + Date + " for " + Hours + " hours " ;
        }
    }
}
