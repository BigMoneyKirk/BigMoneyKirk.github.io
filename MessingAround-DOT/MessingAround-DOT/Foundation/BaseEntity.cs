using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MessingAround_DOT.Foundation
{
  public class BaseEntity
  {
    public bool IsActive { get; set; }

    public int CreatedBy { get; set; }

    public DateTime CreatedAt { get; set; }

    public int UpdatedBy { get; set; }

    public DateTime UpdatedAt { get; set; }

    public int DeletedBy { get; set; }

    public DateTime DeletedAt { get; set; }
  }
}
