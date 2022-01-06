const express = require('express');
const app = express();
const multer = require('multer')


//#region server setup
//enable CORS so that my API is testable by FCC
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// static files (used only for CSS)
app.use(express.static('public'));

//#endregion

//#region routes
// route for the homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

const upfile = multer({}).single('upfile')
app.post("/api/fileanalyse", (req, res) => {
    upfile (req, res, function(err) {
        res.json({
            "name": req.file.originalname,
            "type": req.file.mimetype,
            "size": req.file.size,
        })
    })
})

//#endregion




// listen for requests
const listener = app.listen(process.env.PORT || 8080, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
