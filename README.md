# Github Authentication
An app to authenticate users using their Github account and save information on SQlite using Prisma ORM

## Github Settings
* Login into Github
* Open the menu Settings
* Click on Developer Settings
* Click on OAuth Apps
* Click on the button New OAuth App
* Fill out the application name. Use a name that related to your app/project
* Fill out the Homepage URL with the URL of your page. If you are doing local development use http://localhost:<port>
* Fill out the Application Description. You can just copy and paste the application name.
* Fill out the URL that Github should call once the sign in is successful so it sends a code to that URL. For example: http://localhost:<port>/signin/callback. 
* Copy github signin callback url to GITHUB_URL_ACCESS_TOKEN inside the .env file
* Copy the client ID generated to CLIENT_ID inside the .env file
* Click on Generate a new client secret and copy the content to the GITHUB_CLIENT_SECRET inside the .env file

## Installation
```
yarn
```

# Prisma Configuration
The file data/prisma/schema.prisma is the place where you should define your all your table schemas


# Create your tables using Prisma
Before running your app execute the following terminal command to generate your tables on SQLite. 
```
yarn prisma migrate dev
```

This should be done regardless of the DB you are using.

# Running the Application
```
yarn dev
```

# Routes

* http://localhost:3000/github -> Route to signin using your github account
* http://localhost:3000/signin/callback -> Route that will receive Github's request with a code query parameter
* http://localhost/authenticate -> Route that you shouls send the code parameter returned from Github to retrieve an accessToken and save the user's Github profile data in an SQlite .db file using Prisma ORM