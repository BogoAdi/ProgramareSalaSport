using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface IAppointmentRepository
    {
        public Task AddAppointmentAsync(Appointment appointment);
        void RemoveAppointment(Appointment appointment);
        void ShowAll();
        public  Task<Appointment> GetAppointmentByIdAsync(Appointment appointment);
    }
}
