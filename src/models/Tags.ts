export default class Tags {
  public ipAddress?: string;
  public tags?: string;

  /**
   * Instantiates a "Tags" using fields from the constructor
   *
   * @param ipAddress
   * @param tags
   */
  public constructor(ipAddress?: string, tags?: string) {
    this.ipAddress = ipAddress;
    this.tags = tags;
  }
}
