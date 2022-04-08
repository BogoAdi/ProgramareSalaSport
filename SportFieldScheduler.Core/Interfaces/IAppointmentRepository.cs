using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface IAppointmentRepository
    {
        Task AddAppointmentAsync(Appointment appointment);
        Task RemoveAppointmentAsync(Guid id);
        Task<List<Appointment>> GetAllAppointmentsAsync();
        Task<Appointment> GetAppointmentByIdAsync(Guid id);
    }
}
