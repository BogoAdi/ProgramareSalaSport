using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Domain
{
    public class Entity
    {
       // public Guid Id { get; set; }
       public int Id { get; set; }
        public Entity(int id)
        {
            Id = id;
        }
    }
}
