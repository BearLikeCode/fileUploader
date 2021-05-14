# fileUploader
Steps for starting this project:
1. Open folder frontend and folder backend then type in terminal ```npm i``` or ```npm install```
2. In folder backend you must insert values for variables in file .env:
 - DATABASE
 - MAIL (By default I use Gmail)
 - FROMLOGIN (It's a property for login in your email account.)
 - FROMPASSWORD (It's a property for a password in your email account.)
3. Go to folder frontend and backend in different terminal windows and type command ``` npm start``` 

When I create this project I have such tasks:
1. Create 1 API(POST), that get 2 parameters (first is binary, second is the alias of the file);
2. Write file on the server with a unique name;
3. Write to MongoDB alias from API and unique name of the file;
4. If there is an error send a notification on the email.
