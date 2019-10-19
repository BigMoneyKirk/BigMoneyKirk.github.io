using MessingAround.DAL.Foundation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MessingAround.DAL.Entities
{
  [Table("JournalEntry")]
  public class JournalEntry : BaseEntity
  {
    public int JournalEntryID { get; set; }

    public string JournalEntryTitle { get; set; }

    public string Content { get; set; }

    public int UserID { get; set; }
  }
}
