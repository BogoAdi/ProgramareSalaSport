using MediatR;
using SportFieldScheduler.Core.Interfaces;
using SportFieldScheduler.Infrastructure.Repositories;
using SportFieldSchedulerAPI1.Appointments.Commands;

namespace SportFieldSchedulerAPI1
{
    public class Probe
    {
        static async Task Main(string[] args)
        {
            var _diContainer = new ServiceCollection()
               .AddMediatR(typeof(CreateAppointmentCommand))
               .AddScoped<IAppointmentRepository, AppointmentRepository>()
               .BuildServiceProvider();

            var _mediator = _diContainer.GetRequiredService<IMediator>();

            var appointmentId1 = await _mediator.Send(new CreateAppointmentCommand
            {
                ClientName = "Radu"

            });

            var appointmentId2 = await _mediator.Send(new CreateAppointmentCommand
            {
                ClientName = "Ovi"
            });

            Console.WriteLine($"Appointment created with {appointmentId1.ToString()}");
        }
    }
}
