
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using SportFieldScheduler.Core.Interfaces;
using SportFieldScheduler.Infrastructure.Repositories;
using SportFieldScheduler.Repositories;
using SportFieldSchedulerAPI1.Appointments.Commands;
using SportFieldSchedulerAPI1.Users.Commands;

namespace probe
{
    public class Probe
    {
        static async Task Main(string[] args)
        {
            var _diContainer = new ServiceCollection()
               .AddMediatR(typeof(CreateAppointmentCommand))
               .AddScoped<IAppointmentRepository, AppointmentRepository>()
               .AddScoped<IUserRepository, UserRepository>()
               .AddScoped<ISportFieldRepository, SportFieldRepository>()
               .BuildServiceProvider();

            var _mediator = _diContainer.GetRequiredService<IMediator>();

            var userId1 = await _mediator.Send(new AddUserCommand
            {
                Id = Guid.NewGuid(),
                Name=  "Dan Palcu",
                Username="user1"

            });

            var userId2 = await _mediator.Send(new AddUserCommand
            {
                Id = Guid.NewGuid(),
                Name = "Dan Diaconescu",
                Username = "user12"

            });


            var appointmentId1 = await _mediator.Send(new CreateAppointmentCommand
            {
                Id= Guid.NewGuid(),
                ClientName = "Radu",
                IdUser= Guid.NewGuid(),
                Date = DateTime.Now

            });


            var appointmentId2 = await _mediator.Send(new CreateAppointmentCommand
            {
                ClientName = "Ovi",
                Id= Guid.NewGuid(),
            });

          
            Console.WriteLine($"Appointment created with {appointmentId1}");

        }
    }
}