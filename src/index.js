var express = require('express');
var mypets = express();



mypets.get('/', (req,res) => {
  res.send('List of Pets');
});

mypets.get('/pets', (req,res) => {
  res.json({
    "data": {
      "pets": [
        {
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
        }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/1"
        }
      ]
    }
  }
)
});

mypets.get('/pets/1', (req,res) => {
  res.json({
    "id": 1,
    "name": "Fluffy",
    "age": 5,
    "type": "dog"
  }
)}
);

mypets.get('/pets/2', (req,res) => {
  res.json({
    "id": 2,
    "name": "Bob",
    "age": 6,
    "type": "cat"
  }
)}
);

mypets.listen(9000, () => {
console.log('API is running on port 9000')
});
