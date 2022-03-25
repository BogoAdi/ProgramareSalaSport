using SportFieldScheduler.Domain;
using SportFieldScheduler.Interfaces;

namespace SportFieldScheduler.Repositories
{
    internal class AppointmentRepository : IAppointmentRepository
    {
        private List<Appointment> appointments = new List<Appointment>();
        public void AddAppointment(Appointment appointment)
        {
           void AddAppointment(Appointment appointment)
            {
                appointments.Add(appointment);
            }
        }

        public Appointment GetAppointment(Appointment appointment)
        {
            var found = appointments.Find(x => x.Id == appointment.Id);
            if (found != null)
                return found;
            return null;
        }

        public void RemoveAppointment(Appointment appointment)
        {
            appointments.Remove(appointment);
        }

        public void ShowAll()
        {
            foreach(Appointment appointment in appointments)
            {
                if(appointment != null)
                    Console.WriteLine(appointment); 
            }
            Console.WriteLine();
        }
    }
}
