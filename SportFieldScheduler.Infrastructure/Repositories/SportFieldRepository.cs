using Microsoft.EntityFrameworkCore;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Infrastructure.Repositories
{
    public class SportFieldRepository : ISportFieldRepository
    {   
        //private List<SportField> _fields = new List<SportField>();
        private readonly AppDbContext _context;
        public SportFieldRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task RemoveSportFieldAsync(Guid id)
        {
            var sportfield = _context.SportFields.FirstOrDefault(x => x.Id == id);
            if (sportfield != null)
            {
                _context.SportFields.Remove(sportfield);
                await _context.SaveChangesAsync();
            }
        }

        public  async Task AddSportFieldAsync(SportField sportField)
        {
            _context.SportFields.Add(sportField);
            await _context.SaveChangesAsync();
        }

        public async  Task<List<SportField>> GetAllSportFieldAsync()
        {
            return await _context.SportFields.ToListAsync();
        }

        public async Task<SportField> GetSportFieldById(Guid id)
        {
            return  _context.SportFields.FirstOrDefault(x => x.Id == id);
        }
    }
}
