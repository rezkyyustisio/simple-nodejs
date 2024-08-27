const express = require('express');
const bodyParse = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware untuk log setiap permintaan
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(bodyParse.json())

let data_kategori_produk = [{
    id : 1,
    name : 'elektronik',
    kategori : 'sip'
  },{
    id : 2,
    name : 'perabotan',
    kategori : 'sop'
  }];

app.get('/kategori-produk', (req, res) => {
    res.send(data_kategori_produk);
});

app.get('/kategori-produk/:id', (req, res) => {
    const kategori_produk_id = parseInt(req.params.id)
    const kategori_produk = data_kategori_produk.find(kp => kp.id === kategori_produk_id);
    if (kategori_produk) {
        res.json(kategori_produk);
    } else {
        res.status(404).json({ message: 'Kategori Produk Tidak Ditemukan' });
    }
});

app.post('/kategori-produk', (req, res) => {
    const new_kategori_produk = req.body;
    new_kategori_produk.id = data_kategori_produk.length ? data_kategori_produk[data_kategori_produk.length - 1].id + 1 : 1;
    data_kategori_produk.push(new_kategori_produk);
    res.status(201).json(new_kategori_produk);
});

app.put('/kategori-produk/:id', (req, res) => {
    const kategori_produk_id = parseInt(req.params.id);
    const kategori_produk_index = data_kategori_produk.findIndex(p => p.id === kategori_produk_id);
    if (kategori_produk_index !== -1) {
      data_kategori_produk[kategori_produk_index] = { id: kategori_produk_id, ...req.body };
      res.json(data_kategori_produk[kategori_produk_index]);
    } else {
      res.status(404).json({ message: 'Kategori Produk Tidak Ditemukan' });
    }
});

app.delete('/kategori-produk/:id', (req, res) => {
    const kategori_produk_id = parseInt(req.params.id);
    data_kategori_produk = data_kategori_produk.filter(p => p.id !== kategori_produk_id);
    res.status(204).send();
  });

function filter(arr, string, kategori = '') {
  if(kategori == ''){
    var regex = new RegExp('.*' + string + '.*');
    return arr.filter(function (el) {
      return regex.exec(el.name);
    });  
  } else {
    var regex_name = new RegExp('.*' + string + '.*');
    var regex_kategori = new RegExp('.*' + kategori + '.*');
    return arr.filter(function (el) {
      if(regex_name.exec(el.name)){
        return regex_kategori.exec(el.kategori);
      }
    }); 
  }
}

app.get('/search/kategori-produk', (req, res) => {
  const name_kategori_produk = req.query.name;
  if (filter(data_kategori_produk, name_kategori_produk)) {
      res.json(filter(data_kategori_produk, name_kategori_produk));
  } else {
      res.status(404).json({ message: 'Kategori Produk Tidak Ditemukan' });
  }
});

app.get('/search/kategori-and-name-produk', (req, res) => {
  const kategori_produk = req.query.kategori;
  const name_kategori_produk = req.query.name;
  if (filter(data_kategori_produk, name_kategori_produk, kategori_produk)) {
      res.json(filter(data_kategori_produk, name_kategori_produk, kategori_produk));
  } else {
      res.status(404).json({ message: 'Kategori Produk Tidak Ditemukan' });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});