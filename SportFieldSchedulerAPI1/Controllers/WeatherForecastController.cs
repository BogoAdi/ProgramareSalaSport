using MediatR;
using Microsoft.AspNetCore.Mvc;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Application.Commands.Users;

namespace SportFieldScheduler.API.Controllers
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