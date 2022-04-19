
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface ISportFieldRepository
    {
        public Task<SportField> AddSportFieldAsync(SportField sportField);
        public Task<SportField> RemoveSportFieldAsync(Guid id);
        public Task<List<SportField>> GetAllSportFieldAsync();
        public Task<SportField> GetSportFieldById(Guid id);
        //Task AddAppointmentAsync(SportField sportField, Appointment appointment);

        //Task UpdateAppointmentAsync(SportField sportField, Appointment appointment);
        Task<SportField> UpdateSportFieldAsync(Guid id, SportField sportField);
    }
}
