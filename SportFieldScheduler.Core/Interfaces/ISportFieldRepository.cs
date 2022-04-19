
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface ISportFieldRepository
    {
        public Task AddSportFieldAsync(SportField sportField);

        public Task RemoveSportFieldAsync(Guid id);
        public Task<List<SportField>> GetAllSportFieldAsync();
        public Task<SportField> GetSportFieldById(Guid id);
        Task AddAppointmentAsync(SportField sportField, Appointment appointment);

        Task UpdateAppointmentAsync(SportField sportField, Appointment appointment);

        Task UpdateSportFieldAsync(Guid id, SportField sportField);
    }
}
