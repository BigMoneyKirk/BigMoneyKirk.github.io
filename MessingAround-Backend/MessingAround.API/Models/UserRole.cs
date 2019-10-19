using MessingAround_DOT.Foundation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MessingAround_DOT.Models
{
  public class UserRole : BaseModel
  {
    public int UserRoleID { get; set; }

    public string Name { get; set; }
  }
}
