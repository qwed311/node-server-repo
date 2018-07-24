const express= require('express');
const hbs= require('hbs');
const port = process.env.PORT || 3000;

var app= express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getYear', () => {
   return new Date().getFullYear();
});
  
hbs.registerHelper('shout', (text) => {
  return text.toUpperCase();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title : 'Potato ng tatay mo',
        date: new Date().getFullYear()
    });
});



app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
  });