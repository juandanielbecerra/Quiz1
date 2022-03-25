const express = require('express');
const person_Router = express.Router();
const personShema = require('../models/person_model');

/* Ruta para crear una persona 
Endpoint: http://localhost:5000/api/v1/person/persona*/
person_Router.post('/persona', (req, res)=>{
  const client_name = personShema(req.body);
  client_name
  .save()
  .then((data) => res.json({message: data}))
  .catch((error) => res.json({message: error}));
});

/* Ruta para listar las personas
Endpoint: http://localhost:5000/api/v1/person*/
person_Router.get('/', (req, res)=>{
  personShema
  .find()
  .then((data) => res.json({message: data}))
  .catch((error) => res.json({message: error}));
});


/* Ruta para consultar una persona especifica
Endpoint: http://localhost:5000/api/v1/person*/
person_Router.get('/:client_nameId', (req, res)=>{
  const {client_nameId} = req.params;
  personShema
  .findById(client_nameId)
  .then((data) => res.json({message: data}))
  .catch((error) => res.json({message: error}));
});
  /* Ruta para editar una persona especifica
Endpoint: http://localhost:5000/api/v1/person/client_nameId*/
person_Router.put('/:client_nameId', (req, res)=>{
  const {client_nameId} = req.params;
  const personBody = req.body;
personShema
.updateOne({_id: client_nameId }, {$set: personBody})
.then((data) => res.json({message: data}))
.catch((error) => res.json({message: error}));

});
    /* Ruta para eliminar una persona especifica
Endpoint: http://localhost:5000/api/v1/person/client_nameId*/
person_Router.delete('/:client_nameId', (req, res)=>{
  const {client_nameId} = req.params;
  personShema
  .remove({_id: client_nameId})
  .then((data) => res.json({message: data}))
  .catch((error) => res.json({message: error}));
});

module.exports = person_Router;
