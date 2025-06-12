const xlsxReader = require('./utils/xlsxReader');

document.addEventListener('DOMContentLoaded', async () => {
    const printerData = await xlsxReader('public/printers.xlsx');
    const printerList = document.getElementById('printer-list');
    const searchInput = document.getElementById('search-input');

    function displayPrinters(printers) {
        printerList.innerHTML = '';
        printers.forEach(printer => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${printer.name}, Model: ${printer.model}, Serial: ${printer.serial}, Contact: ${printer.contact}, Notes: ${printer.notes}`;
            printerList.appendChild(listItem);
        });
    }

    function filterPrinters() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPrinters = printerData.filter(printer => printer.serial.toLowerCase().includes(searchTerm));
        displayPrinters(filteredPrinters);
    }

    searchInput.addEventListener('input', filterPrinters);
    displayPrinters(printerData);
});