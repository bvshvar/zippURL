zippURL - URL Shortener Application
zippURL is a URL Shortener Application built with React JS, Python Flask, Firebase Database, and hosted on Heroku.

zip-url (Client)
This is a single-page React app written with Bootstrap. It takes a long URL from a user, stores it in a Firebase database, and generates a shortened URL.

Dependencies:
Firebase Project Account
Firebase Database in Project Account
Running Client Locally:
Install dependencies:
bash
Copy code
npm install
Run the client locally:
bash
Copy code
npm start
zip-url-server (Server)
This is a Python Flask web server that listens for calls made with the generated URL, retrieves the long URL from the database, and redirects the user to the long URL's page.

Dependencies:
Firebase Project Account
Firebase Database in Project Account
Firebase service account JSON key file (ServiceAccountKey.json) in zip-url-server/app/main.py (line 6)
Firebase Database URL in zip-url-server/app/main.py (line 8)
Running Server Locally:
Create a virtual environment in the zip-url-server folder:

bash
Copy code
python3 -m venv venv
Activate virtual environment:

For Windows:
bash
Copy code
venv\Scripts\activate
For macOS/Linux:
bash
Copy code
source venv/bin/activate
Run the server:

bash
Copy code
python wsgi.py
The Flask app is also configured to run the production version of the React app.
