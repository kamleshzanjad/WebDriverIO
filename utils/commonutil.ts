import { Logger as logger } from './Logger';


let varTimeOut = 600000;

export default class CommonUtil {


    public navigateToApplication(url: string): void {

        logger.debug("Inside method: CommonUtil.navigateToApplication");
        browser.url(url);
        browser.windowHandleMaximize();
        browser.timeouts('implicit', varTimeOut);

        browser.timeouts('script', varTimeOut);

        ///browser.timeouts('pageLoad', varTimeOut);
        //browser.setTimeout( 'pageLoad', varTimeOut );
    }

   
    public clickElement(locator: string) {
        logger.debug("Inside method: CommonUtil.clickElement");
        browser.element(locator).click();
    }
    
    public rightClickElement(locator: string) {
        logger.debug("Inside method: CommonUtil.rightClickElement");
        browser.element(locator).rightClick();
    }

    public doubleClickElement(locator: string) {
        logger.debug("Inside method: CommonUtil.rightClickElement");
        browser.element(locator).doubleClick();
    }

    protected selectElementByIndex(locator: string, index:any): any {
        logger.debug("Inside method: CommonUtil.selectElementByIndex");
     
        browser.element(locator).selectByIndex(index);

    };
    protected selectElementByAttribute(locator: string, attributeName:string, value:string): any {
        logger.debug("Inside method: CommonUtil.selectElementByAttribute");       
        browser.element(locator).selectByAttribute(attributeName, value);

    }

    protected selectElementByVisibleText(locator: string, value:string): any {
        logger.debug("Inside method: CommonUtil.selectElementByVisibleText");      
        browser.element(locator).selectByVisibleText(value);
       
    }
    protected getElementText(locator: string): any {
        logger.debug("Inside method: CommonUtil.getElementText");       
        browser.element(locator).getText();
    };
    protected getElementValue(locator: string): any {
        logger.debug("Inside method: CommonUtil.getElementValue");       
        browser.element(locator).getValue();
    };
   
    protected setElementText(locator: string, textValue: string): any {
        logger.debug("Inside method: CommonUtil.setElementText");       
        browser.element(locator).setValue(textValue);
    };
    protected setElementValue(locator: string, textValue: string): any {
        logger.debug("Inside method: CommonUtil.setElementValue");       
        browser.element(locator).setValue(textValue);
    };

    protected getElementAttribute(locator: string, attributeName: string): any {
        logger.debug("Inside method: CommonUtil.getElementAttribute");       
        browser.element(locator).getAttribute(attributeName);
    };
   
    // protected isSelected(locator: string): any {
    //     logger.debug("Inside method: CommonUtil.isSelected");
    //     let by = this.getLocatorstring(locator);
    //     browser.element(locator).click();
    // }
    // protected getElementCount(locator: string): any {
    //     logger.debug("Inside method: CommonUtil.getElementCount");
	// 	let by = this.getLocatorstring(locator);
    //     browser.element(locator).getElementSize();
    // }
   
}
