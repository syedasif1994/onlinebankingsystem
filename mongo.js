const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Asif-test:sai@786@test.jyzfc.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
//'mongodb://localhost/onlinebanking'

var onlinebankingschema = new mongoose.Schema({

  name: String,
  surname: String,
  contact: String,
  email: String,
  address: String,
  gender: String,
  age: String,
  balance: String,
})
var data = mongoose.model('info', onlinebankingschema);


var info = new data({
  name: 'Syed Taqi',
  surname: 'Imam',
  contact: '8000000000',
  email: 'taqi@gmail.com',
  address: 'Kamothe,Navi Mumbai',
  gender: 'Male',
  age: '20',
  balance: '00',
});

info.save(function (err) {
  if (err) return console.error(err);
});


var info1 = new data({
  name: 'Suraj',
  surname: 'shukla',
  contact: '8000000666',
  email: 'suraj@gmail.com',
  address: 'Kamothe,Navi Mumbai',
  gender: 'Male',
  age: '22',
  balance: '00',
});
info1.save(function (err) {
  if (err) return console.error(err);
});


var info2 = new data({
  name: 'Syed Kashif',
  surname: 'Imam',
  contact: '8000444666',
  email: 'kashif@gmail.com',
  address: 'Kharghar,Navi Mumbai',
  gender: 'female',
  age: '24',
  balance: '00',
});
info2.save(function (err) {
  if (err) return console.error(err);
});

var info3 = new data({
  name: 'Sara',
  surname: 'fatima',
  contact: '8002222666',
  email: 'sara@gmail.com',
  address: 'belapur,Navi Mumbai',
  gender: 'female',
  age: '19',
  balance: '00',
});
info3.save(function (err) {
  if (err) return console.error(err);
});


var info4 = new data({
  name: 'neha',
  surname: 'Rai',
  contact: '8111100666',
  email: 'neharai@gmail.com',
  address: 'panvel,Navi Mumbai',
  gender: 'female',
  age: '25',
  balance: '00',
});
info4.save(function (err) {
  if (err) return console.error(err);
});


var info5 = new data({
  name: 'Shikha',
  surname: 'Sawant',
  contact: '8999900666',
  email: 'shikhasawant@gmail.com',
  address: 'Kamothe,Navi Mumbai',
  gender: 'female',
  age: '22',
  balance: '00',
});
info5.save(function (err) {
  if (err) return console.error(err);
});



var info6 = new data({
  name: 'Ankit',
  surname: 'Kumar',
  contact: '8033300666',
  email: 'ankit@gmail.com',
  address: 'nerul,Navi Mumbai',
  gender: 'Male',
  age: '28',
  balance: '00',
});
info6.save(function (err) {
  if (err) return console.error(err);
});



var info7 = new data({
  name: 'Mamta',
  surname: 'Singh',
  contact: '8000325666',
  email: 'mamta@gmail.com',
  address: 'nerul,Navi Mumbai',
  gender: 'Female',
  age: '27',
  balance: '00',
});
info7.save(function (err) {
  if (err) return console.error(err);
});


var info8 = new data({
  name: 'Pintu',
  surname: 'Sharma',
  contact: '8880000666',
  email: 'pintusharma@gmail.com',
  address: 'belapur,Navi Mumbai',
  gender: 'Male',
  age: '26',
  balance: '00',
});
info8.save(function (err) {
  if (err) return console.error(err);
});



