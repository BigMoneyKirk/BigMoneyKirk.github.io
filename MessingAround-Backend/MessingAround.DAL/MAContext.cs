using MessingAround_API.Entities;
using System.Data.Entity;

namespace MessingAround.DAL
{
    public class MAContext : DbContext
    {
        public MAContext() : base("name=MAContext")
        {
            Database.SetInitializer<MAContext>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Bookmark> Bookmarks { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

    public override int SaveChanges()
    {
      return base.SaveChanges();
    }
  }
}
