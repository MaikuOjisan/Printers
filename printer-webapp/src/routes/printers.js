const express = require('express');
const router = express.Router();
const db = require('../db/access-connection');

// Route to fetch printer data and render the printer form
router.get('/printers', async (req, res) => {
    try {
        const connection = await db();
        const result = await connection.query('SELECT * FROM Printers');
        res.render('printerForm', { printers: result });
    } catch (error) {
        console.error('Error fetching printer data:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;