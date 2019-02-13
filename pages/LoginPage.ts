import { Logger as logger} from '../utils/Logger';
var appData = require("../../resources/appConfig.json");
var PropertiesReader = require('../../node_modules/properties-reader');

import CommonUtil from '../utils/commonutil'
import StringUtils from "../utils/string.utils";

var objProperties = PropertiesReader('././resources/propertiesFiles/LoginPage.properties');



export default class LoginPage extends CommonUtil {
  
  private getMapValue(key: string): string {
    return objProperties.get(key);
  }

  public openApplication(): void {
    logger.info("Inside method: LoginPage.openApplication" );
    this.navigateToApplication(appData.url1);
  }  

  public setUserName(value: string): void {
    logger.info("Inside method: LoginPage.setUserName" );
    if(value!=null){
    this.setElementValue(this.getMapValue("UserName"), value);
    }
    else
    this.setElementValue(this.getMapValue("UserName"), appData.userId1);
  }

  public clickNextButton() {
    logger.info("Inside method: LoginPage.clickNextButton" );
    this.clickWebElement(this.getMapValue("NextButton"));
  }

  public setPassword(value: string): void {
    logger.info("Inside method: LoginPage.setPassword" );
    if(value!=null){
    this.setElementValue(this.getMapValue("Password"), value);
    }
    else
    this.setElementValue(this.getMapValue("Password"), appData.password1);
  }

  public clickSignInButton() {
    logger.info("Inside method: LoginPage.clickSignInButton" );
    this.clickWebElement(this.getMapValue("SignInButton"));
  }
  public login(userId, password){
    logger.info("Inside method: LoginPage.login" );
    this.openApplication();
    this.setUserName(userId);
    this.clickNextButton();
    this.setPassword(password);
    this.clickSignInButton();
  }


  
}

