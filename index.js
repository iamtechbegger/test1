const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Piranha SAP Integration!!');
});

const port = 8999;
app.listen(port, () => console.log(`Listening on port ${port}..`));