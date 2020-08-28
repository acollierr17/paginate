export class Paginate {
  constructor(
    private array: Array<any>,
    private size: number
  ) {
    this.array = array;
    this.size = size;
  }

  public getPaginatedArray(): Array<any> {
    return Array.from(
      { length: Math.ceil(this.array.length) / this.size },
      (_, i) => this.getElementsAtPage(i)
    );
  }

  private getPageStart(page: number): number {
    return this.size * page;
  }

  private getElementsAtPage(page: number): Array<any> {
    const start = Math.max(
      this.getPageStart(page),
      0
    );

    const end = Math.min(
      this.getPageStart(page + 1),
      this.array.length
    );

    return this.array.slice(start, end);
  }
}
