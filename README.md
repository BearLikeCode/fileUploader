# fileUploader
Test project. I have such tasks:
 - create 1 API(POST), that get 2 parametrs (first is binary, second is alias of the file)
 - write file on the server with unique name
 - write to MongoDB alias from API and unique name of the file
 - if there is an error send notification on the email

 In folder backend in file variables.env you must insert properties for such variables:
 - DATABASE
 - MAIL (By default I use gmail)
 - FROMLOGIN (It's a property for login in your email account.)
 - FROMPASSWORD (It's a property for password in your email account.)

 Work:
 - I'm working on error handling
 - It will soon added a new variable for inserting list of email or something like that
