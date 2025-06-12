# Meraux Printers

## Overview
Meraux Printers is a web application designed to manage and display printer information. The application features a user-friendly interface that allows users to view details about various printers, including their names, models, serial numbers, contact information, and additional notes.

## Features
- A clean and simple layout with a black background.
- A read-only form that displays printer information.
- Search functionality for each field to easily find specific printer details.
- Integration with an Excel spreadsheet to source printer data.

## Project Structure
```
meraux-printers
├── src
│   ├── index.html          # HTML structure for the webpage
│   ├── styles
│   │   └── main.css       # CSS styles for the project
│   ├── scripts
│   │   └── main.js        # JavaScript functionality for the form
│   └── data
│       └── printers.xlsx   # Excel spreadsheet containing printer data
└── README.md              # Project documentation
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `src/index.html` file in a web browser to view the application.
3. Ensure that the `printers.xlsx` file is correctly formatted and located in the `src/data` directory for the application to function properly.

## Usage
- The application displays a form with fields for Printer Name, Printer Model, Printer Serial, Printer Contact, and Printer Notes.
- Users can enter search queries in each field and click the corresponding search button to filter the displayed printer information.

## Contributing
Contributions to improve the application are welcome. Please submit a pull request or open an issue for any suggestions or enhancements.