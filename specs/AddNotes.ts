import * as chai from "chai";
import { Logger as logger} from '../utils/Logger';

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
//import NotePage from "../pages/NotePage";
var testData = require("../../resources/testDataFiles/testData.json");


describe("AddNotes", function() {
  this.retries(1);
  let TCID: string;
  before(function(){
		logger.initClass("AddNotes");		
	}); 
	after(function(){
		logger.termClass("AddNotes");		
	}); 

	afterEach(function(){
		logger.termMethod(this.currentTest.title);		
	}); 
	
	beforeEach(function(){    
     TCID=this.currentTest.title.split("_")[1];	    
		 
    let objLoginPage = new LoginPage();
      objLoginPage.login(null,null);
      let objHomePage = new HomePage();
      objHomePage.selectTabName(testData["default"].TabName);
     // let objProjectPage = new ProjectPage();
     // objProjectPage.selectProject(testData["default"].ProjectName);
  }); 
  

    it("TC_002_ CreateNotes", function() {  
     
      try{
        chai.expect(testData[TCID].ExpectedValue).empty;


      }catch(e){
        logger.error("Error in test case: " +e);
      }   
     
    
    });

    xit("TC_003_ CreateNotes", function() {
     
      try{
        chai.expect(testData[TCID].ExpectedValue).empty;


      }catch(e){
        logger.error("Error in test case: " +e);
      }  
    
    });
  
  
   
});
