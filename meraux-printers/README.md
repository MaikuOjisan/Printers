# Meraux Printers

## Project Overview
Meraux Printers is a web application designed to display information about various printers. The application reads data from an Excel file (`printers.xlsx`) and presents it in a user-friendly format. Users can search for printers by their serial number.

## Project Structure
```
meraux-printers
├── public
│   ├── index.html        # HTML structure for the webpage
│   └── printers.xlsx     # Excel file containing printer data
├── src
│   ├── app.js            # Main JavaScript file for handling data and search functionality
│   └── utils
│       └── xlsxReader.js # Utility for reading the Excel file
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd meraux-printers
   ```

2. **Install Dependencies**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the application using a local server. You can use a package like `lite-server` or any other server of your choice:
   ```bash
   npm start
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000` (or the port specified by your server) to view the application.

## Usage
- The main page will display a list of printers with their details.
- Use the search input to filter printers by their serial number.

## Dependencies
- [SheetJS](https://github.com/SheetJS/sheetjs) - For reading Excel files.
- Any other libraries as specified in `package.json`.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.