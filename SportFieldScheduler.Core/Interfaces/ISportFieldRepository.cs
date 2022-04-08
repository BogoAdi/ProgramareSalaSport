
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface ISportFieldRepository
    {
        public Task AddSportFieldAsync(SportField sportField);

        public Task RemoveSportFieldAsync(Guid id);
        public Task<List<SportField>> GetAllSportFieldAsync();
        public Task<SportField> GetSportFieldById(Guid id); 

        //public Task AddApointmentToSportField(Appointment appointment);
    }
}
