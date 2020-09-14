// noinspection SuspiciousTypeOfGuard,JSUnusedGlobalSymbols
/**
 * The class for creating paginated arrays.
 * @template T
 */
export class Paginate<T> {
  /**
   * The array that will be used to generate a paginated array.
   */
  public array: Array<T>;
  /**
   * The amount of elements to display per page.
   */
  public size: number;

  /**
   * @param {Array<T>} array The array that will be used to generate a paginated array.
   * @param {number} size The amount of elements to display per page.
   */
  constructor(array: Array<T> = [], size = 1) {
    this.array = array;
    this.size = size;

    if (!Array.isArray(this.array) || !this.array)
      throw new Error(`You must pass in a valid Array object! (Current type: ${typeof this.array})`);
    if (typeof this.size !== 'number')
      throw new Error(`You must pass in a valid number for the page size! (Current type: ${typeof this.size})`);
  }

  /**
   * Sets the array of the Paginate class.
   * @param {Array<T>} array The array to set.
   * @returns {Paginate<T>}
   */
  public setArray(array: Array<T>): Paginate<T> {
    if (!Array.isArray(array) || !array)
      throw new Error(`You must pass in a valid Array object! (Current type: ${typeof array})`);
    if (!array.length)
      throw new Error('There must be at least (1) one element in the array!');

    this.array = array;
    return this;
  }

  /**
   * Sets the page size of the Paginate class.
   * @param {number} size The size to set.
   * @returns {Paginate<T>}
   */
  public setSize(size: number): Paginate<T> {
    if (typeof size !== 'number')
      throw new Error(`You must pass in a valid number for the page size! (Current type: ${typeof size})`);
    if (size < 1)
      throw new Error('The size of elements per page must be at least (1) one!');
    if (size > this.array.length)
      throw new Error('The size of elements per page cannot be greater than the elements in the array!');

    this.size = size;
    return this;
  }

  /**
   * Gets the new paginated array with the defined amount of elements per page.
   * @returns {Array<Array<T>>}
   */
  public getPaginatedArray(): Array<Array<T>> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return [...this.pageGenerator()];
  }

  private *pageGenerator(): Generator<Array<T>, void, Array<T>> {
    const pages = Math.ceil(this.array.length / this.size);
    for (let page = 0; page < pages; page++) {
      const start = Math.max(this.getPageStart(page), 0);
      const end = Math.min(this.getPageStart(page + 1), this.array.length);

      yield this.array.slice(start, end);
    }
  }

  /**
   * Gets the first array element of the current page.
   * @param {number} page The page to get.
   * @returns {number}
   */
  private getPageStart(page: number): number {
    return this.size * page;
  }
}
