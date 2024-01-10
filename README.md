# zipp URL
A URL Shortener Application build with React JS, Python Flask, Firebase Data Base and Heroku.


The project is composed of two folders, mini-link-it-client and mini-link-it-server

## zip-url
This is single page react app written with bootstrap that takes the long URL from a user, stores it in a database (firebase database) and gives the user a generated
shortened url. 

### Dependencies
1. Firebase Project Account
2. Firebase Database in Project Account
3. Firebase config in index.js line 9. 

### Running client Locally
1. `npm install` To install dependencies
2. `npm start`

## zip-url-server
This is a python flask web server that listens for calls made with the generated URL, goes to the database, fetches the long URL then redirects the user to the
long URLS page.

### Dependencies
1. Firebase Project Account
2. Firebase Database in Project Account
3. Firebase service account json key file (ServiceAccountKey.json)
4. Firebase Database URL

### Running Server Locally
1. Create a virtual environment in the zip-url-server folder (python3 -m venv venv)
2. Activate virtual environment (`venv/Scripts/activate`)
3. `python wsgi.py`

The flask app is also set up to run the production version the react app.
