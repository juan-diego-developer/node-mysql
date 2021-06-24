const dbConnetion = require('../../config/dbConnetion');

module.exports = app => {
    const connection = dbConnetion();

    app.get('/', (req, res) => {
        connection.query('SELECT * FROM news', (err , result) => {
            console.log(result);
            res.render('news/news', {
                news: result
            });
        });
    });
    app.post('/news', (req , res) => {
        const { title , news } = req.body;
        connection.query('INSERT INTO news SET?', {
            title,
            news
        }, (err, relsult) => {
            res.redirect('/');
        });
    });
}