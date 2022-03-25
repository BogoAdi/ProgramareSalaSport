using SportFieldScheduler.Domain;

namespace SportFieldScheduler.Interfaces
{
    internal interface ISportField
    {
        void AddSportField(SportField sportField);
        void ShowAll();
        void DeleteSportField(SportField sportField);
        void ShowAllAppointments(SportField s1);
        SportField GetSportField(string sportField);
        void AddAppointment(Appointment appointment,SportField sportField);
    }
}
