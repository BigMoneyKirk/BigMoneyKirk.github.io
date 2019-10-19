using MessingAround.DAL.Foundation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MessingAround_API.Entities
{
    [Table("Bookmark")]
    public class Bookmark : BaseEntity
  {
    public int BookmarkID { get; set; }

    public string Name { get; set; }

    public int UserID { get; set; }

    public User User { get; set; }
  }
}
