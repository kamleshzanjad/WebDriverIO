import { Logger as logger} from './Logger';
export default class CommonUtil {
  

    public navigateToApplication(url:string):void{
        logger.debug("Inside method: CommonUtil.navigateToApplication" );
        browser.url(url);
    }
    public setElementValue(locator:string, strValue:string){
        logger.debug("Inside method: CommonUtil.setElementValue" );
        browser.element(locator).setValue(strValue);
    }
    public clickWebElement(locator:string){
        logger.debug("Inside method: CommonUtil.clickWebElement" );
        browser.element(locator).click();
    }
  }
 