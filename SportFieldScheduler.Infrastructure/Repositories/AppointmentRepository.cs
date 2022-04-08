
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

        public async Task RemoveAppointmentAsync(Guid id)
        {
            appointments.Remove(appointments.FirstOrDefault(x=>x.Id == id));
        }

        public async Task<List<Appointment>> GetAllAppointmentsAsync()
        {
            return appointments;
        }

        public async Task<Appointment> GetAppointmentByIdAsync(Guid id)
        {
            return appointments.First(x => x.Id ==id);
        }

    
      
    }
}
