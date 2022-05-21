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
        
       

        [Required]
        [MinLength (4)]
         public string Name { get; set; }
        [Required]
        
        [MinLength(5)]
        public string Address { get; set; }
        [Required]
        
        [MinLength(3)]
        public string City { get; set; }
        [Required]
        public double PricePerHour { get; set; }
        [Required]
        [MinLength(3)]
        public string Category { get; set; }
        [Required]
        [MinLength(5)]
        public string? Description { get; set; }
        public string Img { get; set; }

    }
}
