# profile-manager
Basic web application to observe the profile of employees in a company

## Description

Frontend of a web application to observe the profile of employees in a company, built with React.

## Installation

### Requirements

- Node.js
- Yarn

## Steps to run the application

1. Clone the repository
You can clone the repository using the following command:
```bash
git clone https://github.com/fedemelo/profile-manager-front
```

2. Create a virtual environment with the dependencies

Install node. You can verify node has been installed using the following command:
```bash
node -v
```

Install yarn, using the following command:
```bash	
npm install --global yarn
```

You can verify yarn has been installed using the following command:
```bash
yarn -v
```

Add the scripts to the package.json file:
```bash
yarn add react-scripts
```

Install the dependencies:
```bash
yarn install
```

1. Run the application

Run the application using the following command:
```bash
yarn start
```

The application will be running on http://172.23.160.1:3000

You can access the application through a browser.

## Important notes

For the application to work properly, you need to run the backend application. You can find the instructions to run the backend application in the following repository:

https://github.com/fedemelo/profile-manager-back

To be able to successfully authenticate, you need to use a user that is already registered in the database. You can find the registered users in the backend application, using the following endpoint:
http://127.0.0.1:8000/logins/

Alternatively, you can use one of the following users, which are already registered in the database:
Username: "johndoe",
Password: "password123"

Username: "admin",
Password: "password123"