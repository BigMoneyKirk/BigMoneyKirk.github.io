using MessingAround.DAL.Foundation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MessingAround_API.Entities
{
    [Table("Bookmark")]
    public class Bookmark : BaseEntity
    {
      [Key]
      public int BookmarkID { get; set; }

      [Required]
      public string Name { get; set; }

      [Required]
      public int UserID { get; set; }

      public virtual User User { get; set; }
  }
}
