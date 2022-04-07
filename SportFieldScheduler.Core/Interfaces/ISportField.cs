
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface ISportField
    {
        void AddSportField(SportField sportField);
        void ShowAll();
        void DeleteSportField(SportField sportField);
        void ShowAllAppointments(SportField s1);
        SportField GetSportField(string sportFieldName);
        void AddAppointment(Appointment appointment, SportField sportField);
    }
}
