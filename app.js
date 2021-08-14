require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port= process.env.PORT;




//Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials', function (err) {console.log(err);});
//servir contenido estatico
//middlewares
app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.render('home', {
        nombre: "Martin Hernandez",
        titulo: "Curso de NodeJS"
    });
});

app.get('/generic', (req, res)=> {
    res.render('generic', {
        nombre: "Adali Gonzalez",
        titulo: "Node JS"
    })
});

app.get('/elements', (req, res)=> {
    res.render('elements', {
        nombre: "Madai Hdz G.",
        titulo: "Express"
    })
})
 
app.get('/hola-mundo', (req, res)=> {
    res.send("Hola mundo")
});

// app.get('/generic', (req, res)=> {
//     res.sendFile( __dirname + '/public/generic.html');
// });

app.get('/elements', (req, res)=> {
    res.sendFile( __dirname + '/public/elements.html');
})

app.get('*', (req, res)=> {
    //res.send("Page not found")
    res.sendFile( __dirname + '/public/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})