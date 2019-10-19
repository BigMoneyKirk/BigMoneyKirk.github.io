using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MessingAround_DOT.Models
{
  public class User
  {

    public int UserID { get; set; }

    public string FirstName { get; set; }

    public string MiddleName { get; set; }

    public string LastName { get; set; }

    public string UserName { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public int UserRoleID { get; set; }

    public bool IsActive { get; set; }

    public int CreatedBy { get; set; }

    public DateTime CreatedAt { get; set; }

    public int UpdatedBy { get; set; }

    public DateTime UpdatedAt { get; set; }

    public int DeletedBy { get; set; }

    public DateTime DeletedAt { get; set; }
  }
}
