import * as crypto from "crypto";

export default class StringUtils {
  /**
   * Returns random string of lengths
   * @param length
   */
  static getRandomString(length: number): string {
    return crypto.randomBytes(length).toString("hex");
  }
}
