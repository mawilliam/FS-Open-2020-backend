const express = require('express');
const app = express();

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ];

  app.use(express.json()); // json-parser to handle data received

  app.get('/api/persons', (request, response) => {
      response.json(persons);
  });

  app.get('/info', (request, response) => {
      const now = new Date();
      const htmlResponse = `<div>Phonebook has info for ${persons.length} people</div><div>${now}</div>`;
      response.send(htmlResponse);
  });

  app.get('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id);
      const person = persons.find(person => person.id === id)

      if (person) {
          response.json(person);
      } else {
          response.status(404).end();
      };
  });

  app.delete('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id);
      persons.filter(person => person.id !== id);

      // 204 no content whether it exists or not since deleting
      response.status(204).end();
  });

  app.post('/api/persons', (request, response) => {
      const person = request.body;

      const duplicate = persons.find(p => p.name === person.name)

      // check whether missing name or number
      if (!person.name) {
          return response.status(400).json({
              error: 'name missing'
          });
      } else if (!person.number) {
          return response.status(400).json({
              error: 'number missing'
          });
      } else if (duplicate) {
          return response.status(400).json({
              error: 'duplicate entry'
          });
      };

      // good request
      const id = Math.floor(Math.random()*1000000);
      
      person.id = id
      persons = persons.concat(person)
      console.log(person);

      response.json(person);

  })

  const PORT = 3001;
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });