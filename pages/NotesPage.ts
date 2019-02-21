import { Logger as logger } from '../utils/Logger';
var PropertiesReader = require('../../node_modules/properties-reader');
import CommonUtil from '../utils/commonutil'
import stringUtils from "../utils/string.utils";
let myMap = new Map();

var objProperties = PropertiesReader('././resources/propertiesFiles/NotesPage.properties');



export default class NotesPage extends CommonUtil {
  private getMapValue(key: string): string {
    return objProperties.get(key);
  }
  public selectAsset(assettName: string): void {
    logger.info("Inside method: NotesPage.selectAsset");
    let locator;
    if (assettName != null) {
      locator = this.getMapValue("selectAsset");
      locator = locator.replace("VALUES", assettName);
    } else {
      locator = this.getMapValue("selectAnyAsset");
    }
    this.clickElement(locator);
  }

  public navigateToSubTab(subtabName: string) {   // refer this one
    logger.info("Inside method: NotesPage.navigateToSubTab");
    let locator = this.getMapValue("subTabName");
    //locator = locator.replace("VALUES", subtabName.toUpperCase());
    this.clickElement(locator);
  }

  public createNote(month: string, year: string, selAssumptions: string, noteName: string, flagIncludeInReports, flagCreateNote) {
    logger.info("Inside method: NotesPage.createNote");
    this.clickElement(this.getMapValue("btnAction"));
    browser.pause(1000);
    this.clickElement(this.getMapValue("btnCreateNote"));
    if (month != null) {
      this.selectElementByVisibleText(this.getMapValue("selectMonth"), month);

    }
    if (year != null) {
      this.setElementText(this.getMapValue("yearTextBox"), year);
    }
    if (selAssumptions != null) {
      this.selectElementByVisibleText(this.getMapValue("selectAssumption"), selAssumptions)
    }
    if (noteName != null) {
      this.setElementText(this.getMapValue("textBox"), noteName);
    }
    if (flagIncludeInReports == true) {
      this.clickElement(this.getMapValue("includeInReportsCheckbox"));
    }
    if (flagCreateNote == true) {
      this.clickElement(this.getMapValue("saveButton"));
    } else {
      this.clickElement(this.getMapValue("cancelButton"));
    }
  }
  public selectNote(noteName) {
    logger.info("Inside method: NotesPage.selectNote");
    this.clickElement("selectNote");
  }


  public DeleteNote() {
    logger.info("Inside method: NotesPage.DeleteNote");
    this.clickElement(this.getMapValue("btnAction"))
    this.rightClickElement(this.getMapValue("clickOnDeleteNote"));
    this.rightClickElement(this.getMapValue("Ok")); //accept alert
  }

  public CopyeNote() {
    logger.info("Inside method: NotesPage.CopyeNote");
    this.clickElement(this.getMapValue("btnAction"))
    this.rightClickElement(this.getMapValue("clickOnCopyNote"));
  }

  public PasteNote() {
    logger.info("Inside method: NotesPage.PasteNote");
    this.clickElement(this.getMapValue("btnAction"))
    this.rightClickElement(this.getMapValue("clickOnPasteNote"));
    this.rightClickElement(this.getMapValue("clickOnPaste"));
  }
  private newMethod() {
    myMap.get(1).get(1);
  }

  // public getNotesTable() {
  //     var rowSize = this.getElementCount(this.getMapValue("rowNoteTable"));
  //     for (var i = 1; i <= rowSize; i++) {
  //         myMap.set(i, this.getInnerMap(i));
  //     };
  // };

  public getInnerMap(i): any {
    let myMap2 = new Map();
    myMap2.set(1, this.getElementText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[" + i + "]//td[1]"));
    myMap2.set(2, this.getElementText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[" + i + "]//td[2]"));
    myMap2.set(3, this.getElementText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[" + i + "]//td[3]"));
    myMap2.set(4, this.getElementText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[" + i + "]//td[4]"));
    myMap2.set(5, this.getElementText("//div[@class='ht_master handsontable']//table[@class='htCore']//tbody//tr[" + i + "]//td[5]"));
    return myMap2;
  };
}