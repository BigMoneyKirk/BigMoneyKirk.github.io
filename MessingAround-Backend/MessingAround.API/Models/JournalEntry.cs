using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MessingAround_DOT.Models
{
  public class JournalEntry
  {
    public int JournalEntryID { get; set; }

    public string JournalEntryTitle { get; set; }

    public string Content { get; set; }

    public int UserID { get; set; }
  }
}
