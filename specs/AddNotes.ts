import * as chai from "chai";
import { Logger as logger } from '../utils/Logger';

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import NotesPage from "../pages/NotesPage";
import { threadId } from "worker_threads";
var testData = require("../../resources/testDataFiles/testData.json");


describe("AddNotes", function () {
  let objNotesPage =null;
  this.retries(1);
  let TCID: string;
  before(function () {
    logger.initClass("AddNotes");
  });
  after(function () {
    logger.termClass("AddNotes");
  });

  afterEach(function () {
    logger.termMethod(this.currentTest.title);
  });

  beforeEach(function () {
    TCID = this.currentTest.title.split("_")[1];

    let objLoginPage = new LoginPage();
    objLoginPage.login(null, null);
    let objHomePage = new HomePage();
    objHomePage.navTabName(testData["default"].TabName);
    
    // let objProjectPage = new ProjectPage();
    // objProjectPage.selectProject(testData["default"].ProjectName);
  });

  
  it("TC_002_ CreateNotes", function () {
    try {
     
      let objNotesPage= new NotesPage();
      objNotesPage.selectAsset(testData["default"].AssetName);
      browser.pause(5000);
      objNotesPage.navigateToSubTab(testData["default"].subTabName);
      browser.pause(3000);
      objNotesPage.createNote(testData["default"].month,testData["default"].year,testData["default"].assumption,testData["default"].notename, true, true);
    } catch (e) {
      logger.error("Error in test case: " + e);
    }
  });
});
