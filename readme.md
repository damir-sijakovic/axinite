![AXINITE](axinite.svg)

# AXINITE

## What is it?

Electron MVC framework.

## Why did you make this?

I don't want to rewrite everything everytime I start something new with Electron.


## What is this usable for?

It's a prototype. Still under development...

## How does it work?

#### /app and config.js
All you should care about is what is in 'app' directory.  
This is where you should put your files. 'config.js' is configuration file.

#### Model

File '/app/model.db' is project database. If there is no 'model.db'  
file Axinite will initialize database using 'model.sql'.  
File 'model.sql' should contain sqlite table data.    
To test, (it's still buggy at moment) go to 'model' page and    
first insert data and then listout. You can also view 'model.db'    
with DB Browser for SQLite.


#### Controller

Controllers are located at 'app/controllers/yourControllerName'.  
I'll add bash or node script that will generate controller files.
 
#### How controllers work?

'yourControllerName/index.html' calls function from 'yourControllerName/view.js'    
that sends ipc message to '/system/message.js'. '/system/message.js' then    
calls functions from 'yourControllerName/controller.js' or 'yourControllerName/model.js'   
if you need database data.


## I'm new to all of this, how do I run it?

Project is created/tested on 5.9.16-1-MANJARO linux. Its not tested on other systems.   
You will need an and node.js. In terminal, run in project dir (where package.json is):

        npm install
            
Then to start electron app:

        npm start


## Generating and testing controllers via terminal

To generate controller run:

        npm run createController hello

To test run:

        npm start -- controller:hello


## Have fun!
