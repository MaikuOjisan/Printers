# Printer Web Application

This project is a web application that connects to an Access database to manage printer information. It allows users to view and submit printer details through a web form.

## Project Structure

```
printer-webapp
├── src
│   ├── app.js               # Entry point of the application
│   ├── db
│   │   └── access-connection.js  # Database connection logic
│   ├── routes
│   │   └── printers.js      # Routes for handling printer data
│   ├── views
│   │   └── printerForm.ejs  # EJS template for the printer form
│   └── public
│       └── styles.css       # CSS styles for the application
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd printer-webapp
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the Access database connection:**
   Update the `src/db/access-connection.js` file with your database connection details.

4. **Run the application:**
   ```
   node src/app.js
   ```

5. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000` to view the printer form.

## Usage

- The application allows users to input and view printer details, including:
  - Printer Name
  - Printer Model
  - Printer Serial
  - Printer Contact
  - Printer Notes
  - Printer Toner

- The data is stored in an Access database and can be retrieved and displayed through the form.

## License

This project is licensed under the MIT License.