const fs = require('fs');

module.exports = function(app) {
    app.get('/source-code/**', (req, res) => {
        const fileName = req.path.replace('/source-code', '');

        console.log(`Reading ${fileName}`);

        fs.readFile(`src/${fileName}`, 'utf-8', (err, data) => res.end(data));
    });
};
