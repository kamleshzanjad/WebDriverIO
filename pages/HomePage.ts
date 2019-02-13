import { Logger as logger} from '../utils/Logger';
var PropertiesReader = require('../../node_modules/properties-reader');
import CommonUtil from '../utils/commonutil'
import StringUtils from "../utils/string.utils";

var objProperties = PropertiesReader('././resources/propertiesFiles/HomePage.properties');



export default class HomePage extends CommonUtil {
  
  private getMapValue(key: string): string {
    return objProperties.get(key);
  }

  public selectTabName(tabName:string): void {
    logger.info("Inside method: HomePage.selectTabName" );
    let locator= this.getMapValue("TabName");
    locator=locator.replace("VALUES", "Projects");
    this.clickWebElement(locator);
  }  

  
}

