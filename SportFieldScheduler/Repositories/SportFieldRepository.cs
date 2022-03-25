using SportFieldScheduler.Domain;
using SportFieldScheduler.Interfaces;

namespace SportFieldScheduler.Repositories
{
    internal class SportFieldRepository : ISportField
    {   
        private List<SportField> _fields = new List<SportField>();

        public void AddAppointment(Appointment appointment, SportField sportField)
        {
           sportField.Appointments.Add(appointment);
        }

        public void AddSportField(SportField sportField)
        {
            _fields.Add(sportField);
        }

        public void DeleteSportField(SportField sportField)
        {
           _fields.Remove(sportField);
        }

        public SportField GetSportField(string sportFieldName)
        {
            var found = _fields.Find(field =>field.Name==sportFieldName);
            if (found!=null)
                return found;
            return null;
        }

        public void ShowAll()
        {
            foreach (var sportField in _fields)
            {
                Console.WriteLine(sportField.ToString());
            }
            Console.WriteLine();
        }

        public void ShowAllAppointments(SportField s1)
        {
            var allAppointments = _fields.Where(field => field.Name==s1.Name);
            foreach (var appointment in allAppointments)
            {
                Console.WriteLine(appointment.ToString());
            }
            Console.WriteLine();
        }
    }
}
