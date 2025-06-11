const ADODB = require('node-adodb');

const connectionString = 'Provider=Microsoft.ACE.OLEDB.12.0;Data Source=path_to_your_database.accdb;';

const accessConnection = () => {
    const connection = ADODB.open(connectionString);

    connection
        .then(() => {
            console.log('Connected to Access database successfully.');
            return connection;
        })
        .catch(error => {
            console.error('Error connecting to Access database:', error);
            throw error;
        });

    return connection;
};

module.exports = accessConnection;