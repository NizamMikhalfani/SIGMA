# Sistem Informasi Geografis Museum dan Arsip (SIGMA)

## Description
This web application is designed to store data in a database, allowing for data editing and retrieval. It can run on both localhost for development and in a hosting environment for production.

## Project Structure
```
web-app
├── public
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── main.js
│   └── index.html
├── src
│   ├── controllers
│   │   └── index.js
│   ├── models
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   ├── views
│   │   └── index.ejs
│   └── app.js
├── config
│   └── database.js
├── .env
├── package.json
├── README.md
└── server.js
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd web-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
1. Create a `.env` file in the root directory and add your environment variables, such as database credentials.
2. Configure the database connection in `config/database.js`.

## Running the Application
To start the server, run:
```
node server.js
```
The application will be accessible at `http://localhost:3000` (or the specified port).

## Usage
- Access the main page at `http://localhost:3000`.
- Use the application to store, edit, and retrieve data.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.
