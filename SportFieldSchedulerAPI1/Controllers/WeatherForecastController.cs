using MediatR;
using Microsoft.AspNetCore.Mvc;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Application.Commands.SportFields;
using SportFieldScheduler.Application.Commands.Users;

namespace SportFieldScheduler.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private IMediator _mediator;
        public WeatherForecastController(ILogger<WeatherForecastController> logger, IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public async Task<IEnumerable<WeatherForecast>> Get()
        {
            var userId2 = await _mediator.Send(new AddUserCommand
            {
                Id = Guid.NewGuid(),
                Name = "Dan Diaconescu",
                Username = "user12",
                Email ="asdfcadsf@asdd",
                Password ="123"

            });
            var SportFiled1 = await _mediator.Send(new CreateSportFieldCommand
            {
                Address =" bdv Eroilor de la Tisa",
                Category=" tennis",
                City="Timisoara",
                Id=Guid.NewGuid(),
                PricePerHour= 75
            });
            var appointemt = await _mediator.Send(new CreateAppointmentCommand
            {
                Id=Guid.NewGuid(),
                IdField= SportFiled1.Id,
                IdUser= userId2,
                Hours=2,
                ClientName="Grigorescu Mihai",
                Date=DateTime.Now,
                PhoneNumber="075503213",
                TotalPrice= 0 ///????
            });

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}