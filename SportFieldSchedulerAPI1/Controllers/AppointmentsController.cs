using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Application.Queries.Appointments;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        public readonly IMapper _mapper;
        public readonly IMediator _mediator;
        public AppointmentsController(IMapper mapper, IMediator mediator)
        {
            _mediator = mediator;
            _mapper = mapper;
        }


        [HttpPost]
        public async Task<IActionResult> CreateAppointment(AppointmentPostDto appointment)
        {
            var command = _mapper.Map<AppointmentPostDto, CreateAppointmentCommand>(appointment);
            var created = await _mediator.Send(command);
            if (created == null) return BadRequest();
            var dto = _mapper.Map<Appointment, AppointmentGetDto>(created);
            return CreatedAtAction(nameof(GetAppointmentById), new { id = created.Id }, dto);
        }
        [HttpGet]
        public async Task<IActionResult> GetAppointments()
        {
            var result = await _mediator.Send(new GetAllAppointmentsQuery());
            var mappedResult = _mapper.Map<List<AppointmentGetDto>>(result);
            return Ok(mappedResult);
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetAppointmentById(Guid id)
        {
            var query = new GetAppointmentByIdQuery { Id = id };
            var result = await _mediator.Send(query);
            if (result == null)
            {
                return NotFound();
            }
            var mappedResult = _mapper.Map<Appointment, AppointmentGetDto>(result);
            return Ok(mappedResult);
        }



        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeletAppointment(Guid id)
        {
            var command = new DeleteAppointmentCommand { Id = id };
            var result = await _mediator.Send(command);

            if (result.Equals(Guid.Empty))
                return NotFound();

            return NoContent();
        }
    }
}
