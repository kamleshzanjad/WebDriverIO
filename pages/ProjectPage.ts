import { Logger as logger} from '../utils/Logger';
var PropertiesReader = require('../../node_modules/properties-reader');
import CommonUtil from '../utils/commonutil'
import StringUtils from "../utils/string.utils";

var objProperties = PropertiesReader('././resources/propertiesFiles/ProjectPage.properties');



export default class ProjectPage extends CommonUtil {
  
  private getMapValue(key: string): string {
    return objProperties.get(key);
  }

  public selectProject(projectName:string): void {
    logger.info("Inside method: ProjectPage.selectProject" );
    let locator;
    if(projectName!=null){
     locator= this.getMapValue("ProjectName");
    locator=locator.replace("VALUES", projectName);
    }else
    locator=this.getMapValue("AnyProject");
    this.clickWebElement(locator);
  }  

  
}

