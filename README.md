
 Prerequisite for Front-End Stock Portfolio Management Angular Application 
 
 
  Information : Used Stock Sybol By Me :- symbol=AAPL ,  symbol=MSFT ,  symbol=GOOGL
  
  JSON Request For POST Man Client: - (http://localhost:8080/api/addStock)
     {
		"symbol":"AAPL",
        "quantity": 3  
     }
	
	{
		"symbol":"MSFT",
        "quantity": 4  
    }
	
	{
		"symbol":"GOOGL",
        "quantity": 2
    }
 
 
 Step 1: clone the project from GitHub Link in the workspace folder

 Step 2:  Import the project folder in Visual Studio (VS Code Tools) 
 
 Step 3:  run the command in Visual Studio Terminal "npm install"
 
 Step 4:  To execute the project run the "ng serve --open" command
 
 Step 5:   localhost:4200/ link open on browser
 
 Step 6:   Now you see the home page of the application
 
 Step 7:   When you click on the portfolio you can see the stock of the portfolio that exists in the Database
 
 Step 8:   when you click on Historical Stock you can see the history of the portfolio.
 
 Step 9: When you click on Add Stock, you can add a stock to your portfolio with Current real-time data.
           But we are using an external API, and there is a Free Limit per day. So, I have a hard-coded default value.
		   
		   For the need to check real-time stock value need to Create an Account Below with email ID Registration.  
		   
		   For External Stock prices create an account on 
           Alpha Vantage(https://www.alphavantage.co/) Free API to get a Free key from there.
           Replace with the below key "RE6R68JMS4APGODI" in the Application.property file of the Back End API Project.
        
           Application.property File
           alphavantage.api.key=RE6R68JMS4APGODI
		   
		   
Tool Version Information:-


1) Node (v20.18.0(LTS)) : https://nodejs.org/en/download/prebuilt-installer
2) node --version
3) npm -version (10.8.2)
4) npm install -g @angular/cli  (install angular which binary of cli in ng)
5) ng --version (18.2.10)
6) ng new --no-standalone (after Angualr17 there is a standalone tag that means no app.module if we want this just run this command)

ng new AngularWorkSpaceOct24 --no-standalone

7) Visual Studio

