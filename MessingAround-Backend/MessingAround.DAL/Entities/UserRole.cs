using MessingAround.DAL.Foundation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MessingAround_API.Entities
{
  [Table("UserRole")]
  public class UserRole : BaseEntity
  {
    [Key]
    public int UserRoleID { get; set; }

    [Required]
    [StringLength(40)]
    public string Name { get; set; }
  }
}
