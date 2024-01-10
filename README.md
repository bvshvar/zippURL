# zippURL

A URL Shortener Application build with React JS, Python Flask, Firebase Data Base and Heroku.

The project is composed of two folders, zip-url and the zip-url-server

zip-url

This is single page react app written with bootstrap that takes the long URL from a user, stores it in a database (firebase database) and gives the user a generated shortened url.

Dependencies
Firebase Project Account
Firebase Database in Project Account
Running client Locally
npm install To install dependencies
npm start

zip-url-server

This is a python flask web server that listens for calls made with the generated URL, goes to the database, fetches the long URL then redirects the user to the long URLS page.

Dependencies

Firebase Project Account
Firebase Database in Project Account
Firebase service account json key file (ServiceAccountKey.json) in zip-url-server/app/main.py line 6
Firebase Database URL in zip-url-server/app/main.py line 8
Running Server Locally
Create a virtual environment in the zip-url-server folder (python3 -m venv venv)
Activate virtual environment (venv/Scripts/activate)
python wsgi.py

The flask app is also set up to run the production version the react app. 
