using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Core.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Application.Dto
{
    public class SportFieldPostDto
    {   
       // [Required]
        //public Guid Id { get; set; }
        //  public string Name { get; set; }
        [Required]
        [MaxLength(45)]
        [MinLength(5)]
        public string Address { get; set; }
        [Required]
        [MaxLength(40)]
        [MinLength(5)]
        public string City { get; set; }
        [Required]
        public double PricePerHour { get; set; }
        [Required]
        [MaxLength(25)]
        [MinLength(5)]
        public string Category { get; set; }
        [Required]
        [MaxLength(300)]
        [MinLength(5)]
        public string? Description { get; set; }

    }
}
