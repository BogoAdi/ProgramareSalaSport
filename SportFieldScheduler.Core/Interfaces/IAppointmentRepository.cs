using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface IAppointmentRepository
    {
        Task <Appointment>AddAppointmentAsync(Appointment appointment);
        Task <Appointment> RemoveAppointmentAsync(Guid id);
        Task<List<Appointment>> GetAllAppointmentsAsync();
        Task<Appointment> GetAppointmentByIdAsync(Guid id);
        Task<Appointment> UpdateAppointment(Guid id,Appointment appointment);
    }
}
