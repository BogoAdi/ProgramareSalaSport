
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Infrastructure.Repositories
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private List<Appointment> appointments = new List<Appointment>();

        public async Task AddAppointmentAsync(Appointment appointment)
        {
            appointments.Add(appointment);
        }

        public async Task<Appointment> GetAppointmentByIdAsync(Appointment appointment)
        {
            return appointments.First(x => x.Id == appointment.Id);
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
