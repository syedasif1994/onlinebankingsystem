const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const port = 80;


app.use(express.static(__dirname + "/public"))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Handlebars setting
const hbs = exphbs.create({
    extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");



//Setting moogoose
mongoose.set('returnOriginal', false);
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://Asif-test:sai@786@test.jyzfc.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we are connected")
});

let onlinebankingschema = new mongoose.Schema({

    name: String,
    surname: String,
    contact: String,
    email: String,
    address: String,
    gender: String,
    age: String,
    balance: String

})
let info = mongoose.model('info', onlinebankingschema);




//router
app.get('/', (req, res) => {
    res.status(200).render("home", { title: 'Welcome to the homepage' })
})


app.post('/signup', (req, res) => {
    console.log(req.body)

    let user = new info(req.body)
    user.save().then(result => {
        if (result) {
            return res.status(200).json({
                msg: true
            })
        }
    }).catch(err => {
        return res.status(500).json({
            msg: false
        });
    });
})



app.get('/user', (req, res) => {
    info.findById("600852b6369e901254fb99ab").exec().then(data => {
        return res.status(200).json({ data })
    }).catch((error) => {
        console.log(error)
    }
    )

})


app.get('/customer', (req, res) => {
    info.find().exec().then(data => {
        return res.render('customer', {
            customer: data
        })
    })
})

app.post('/update', (req, res) => {
    console.log(req.body)

    const idlength = (req.body.userid).length
    const id = req.body.userid.slice(idlength / 2)

    info.findById(id).exec().then(data => {
        //return res.status(200).json({data})
        const totalbalance = Number(data.balance) + Number(req.body.balance)
        info.findByIdAndUpdate(id, { $set: { balance: totalbalance } }, { multi: false, new: false }, (err, data) => {
            if (!err) {
                res.status(200).redirect("/customer")
            }
            else {
                console.log("Error in update" + err)
            }

        }).catch((error) => {
            console.log(error)
        })
    })
    })




    app.get('/about', (req, res) => {
        res.status(200).render("about", { title: 'About Us' })
    })

    app.get('/news', (req, res) => {
        res.status(200).render("news", { title: 'Latest News' })
    })

    //listen
    app.listen(port, () => {
        console.log(`The server is start ${port}`)
    })