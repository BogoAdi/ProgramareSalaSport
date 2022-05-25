namespace SportFieldScheduler.Application.Dto
{
    public class AppointmentGetDto
    {
        public Guid Id { get; set; }
        public Guid SportFieldId { get; set; }
        public Guid UserId { get; set; }
        public DateTime Date { get; set; }
        public int Hours { get; set; }
        public double TotalPrice { get; set; }


    }
}
