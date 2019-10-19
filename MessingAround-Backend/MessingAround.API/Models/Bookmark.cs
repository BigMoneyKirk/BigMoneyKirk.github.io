using MessingAround_DOT.Foundation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MessingAround_DOT.Models
{
  public class Bookmark : BaseModel
  {
    public int BookmarkID { get; set; }

    public string Name { get; set; }

    public int UserID { get; set; }

    public User User { get; set; }
  }
}
