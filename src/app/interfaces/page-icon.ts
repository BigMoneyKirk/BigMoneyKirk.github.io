export abstract class PageIcon {
    page: string = "test";
    icon: string;

    public getCurrentPage(path: string) {
        return this.page = path;
      }
}