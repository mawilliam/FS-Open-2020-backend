require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');

const app = express();

morgan.token('body', function (req, res) {return JSON.stringify(req.body)});

app.use(express.static('build')); // first checks the build dir for the request
app.use(cors()); // middleware to allow requests from other origins (port 3000 vs 3001)
app.use(express.json()); // json-parser to handle data received
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body')); // log messages to the console based on the tiny configuration of morgan
//app.use(morgan('tiny', ':body')); // log messages to the console based on the tiny configuration of morgan

app.get('/api/persons', (request, response) => {
    Person.find({}).then(people => {
        response.json(people);
    });
});

app.get('/info', (request, response) => {
    const now = new Date();
    Person.countDocuments({})
        .then(count => {
            const htmlResponse = `<div>Phonebook has info for ${count} people</div><div>${now}</div>`;
            response.send(htmlResponse);
        });
});

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person);
            } else {
                response.status(404).end();
            };
        })
        .catch(error => next(error));
});

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end();
        })
        .catch(error => next(error));
});

app.post('/api/persons', (request, response) => {
    const body = request.body;
    
    // const duplicate = persons.find(p => p.name === body.name)

    // check whether missing name or number
    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        });
    } else if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        });
    }; /* else if (duplicate) {
        return response.status(400).json({
            error: 'duplicate entry'
        });
    };
    */

    // good request
    // const id = Math.floor(Math.random()*1000000);
    const person = new Person({
        name: body.name,
        number: body.number
    });

    person.save().then(savedPerson => {
        response.json(savedPerson);
    });

});

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body;

    const person = {
        number: body.number
    };

    Person.findByIdAndUpdate(request.params.id, person, {new: true})
        .then(updatedPerson => {
            response.json(updatedPerson);
        })
        .catch(error => next(error));
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
};

// loaded next to last so all others are checked first
// handler of requests with an unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
    console.log(error);

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' });
    };

    next(error); // all other errors passed to the default Express error handler
};

// handler of requests with result to errors
app.use(errorHandler);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});