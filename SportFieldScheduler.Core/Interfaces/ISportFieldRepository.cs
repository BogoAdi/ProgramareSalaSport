
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface ISportFieldRepository
    {
        public Task<SportField> AddSportFieldAsync(SportField sportField);
        public Task<SportField> RemoveSportFieldAsync(Guid id);
        public Task<List<SportField>> GetAllSportFieldAsync();
        public Task<SportField> GetSportFieldByIdAsync(Guid id);
        Task<SportField> UpdateSportFieldAsync(Guid id, SportField sportField);
    }
}
