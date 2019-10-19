using MessingAround.DAL.Foundation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MessingAround_API.Entities
{
  [Table("User")]
  public class User : BaseEntity
  {
    public User() : base()
    {
    }

    [Key]
    public int UserID { get; set; }

    [Required]
    [StringLength(50)]
    public string FirstName { get; set; }

    [StringLength(50)]
    public string MiddleName { get; set; }

    [Required]
    [StringLength(50)]
    public string LastName { get; set; }

    [Index(IsUnique = true)]
    [StringLength(20)]
    public string UserName { get; set; }

    [StringLength(40)]
    public string Email { get; set; }

    [Required]
    [StringLength(20)]
    public string Password { get; set; }

    [Required]
    public int UserRoleID { get; set; }

    public virtual UserRole UserRole { get; set; }
  }
}
