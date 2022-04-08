using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Infrastructure.Repositories
{
    public class SportFieldRepository : ISportFieldRepository
    {   
        private List<SportField> _fields = new List<SportField>();

    //  public void AddAppointment(Appointment appointment, SportField sportField)
    //  {
    //     sportField.Appointments.Add(appointment);
    //  }
        public async Task RemoveSportFieldAsync(Guid id)
        {
            _fields.Remove(_fields.FirstOrDefault(x => x.Id == id));
        }

        public  async Task AddSportFieldAsync(SportField sportField)
        {
            _fields.Add(sportField);
        }

        public async  Task<List<SportField>> GetAllSportFieldAsync()
        {
            return _fields;
        }

        public async Task<SportField> GetSportFieldById(Guid id)
        {
            return _fields.FirstOrDefault(x => x.Id == id);
        }
    }
}
