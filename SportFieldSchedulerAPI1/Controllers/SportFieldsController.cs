using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Application.Commands.SportFields;
using SportFieldScheduler.Application.SportFields.Queries;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SportFieldsController : ControllerBase
    {

        public readonly IMapper _mapper;
        public readonly IMediator _mediator;
        public SportFieldsController( IMediator mediator, IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> CreateSportField(SportFieldPostDto sportfield)
        {
            var command = _mapper.Map<SportFieldPostDto, CreateSportFieldCommand>(sportfield);
            var created = await _mediator.Send(command);
            var dto = _mapper.Map<SportField, SportFieldGetDto>(created);
            return CreatedAtAction(nameof(GetSportFieldById), new { id = created.Id }, dto);
        }
        [HttpGet]
        public async Task<IActionResult> GetSportFields()
        {
            var result = await _mediator.Send(new GetAllSportFieldsQuery());
            var mappedResult = _mapper.Map<List<SportFieldGetDto>>(result);
            return Ok(mappedResult);
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetSportFieldById(Guid id)
        {
            var query = new GetSportFieldByIdQuery { Id = id };
            SportField result;
            try
            {
                 result = await _mediator.Send(query);
            }catch (InvalidOperationException ex) { return NotFound("Sport Fieldul nu este prezent"); }

          //  if (result == null)
          //  {
          //      return NotFound();
          //  }
            var mappedResult = _mapper.Map<SportField, SportFieldGetDto>(result);
            return Ok(mappedResult);
        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteSportField(Guid id)
        {
            var command = new DeleteSportFieldCommand { Id = id };
            var result = await _mediator.Send(command);

            if (result == null)
                return NotFound();

            return NoContent();
        }
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateSportField(Guid id, [FromBody]  SportFieldPostDto sportfield)
        {
            var command = new UpdateSportFieldCommand {
                Id = id,
                Address= sportfield.Address,
                Category= sportfield.Category,
                City= sportfield.City,
                Description= sportfield.Description,
                PricePerHour= sportfield.PricePerHour
                };
            var result = await _mediator.Send(command);
            if (result == null)
            {
                return NotFound();
            }
            var mappedResult = _mapper.Map<SportField, SportFieldGetDto>(result);
            return Ok(mappedResult);
        }

    }
}
