const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument');
    process.exit(1);
};

const password = process.argv[2];

const url = `mongodb+srv://test-user-1:${password}@cluster0.dfpbp.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema for the model, but mongoDB docs can have any properties and don't need these
const personSchema = new mongoose.Schema({
    name: String,
    number: String,
});

const Person = mongoose.model('Person', personSchema);

// Check whether there is only one command line argument
if (process.argv.length === 3) {
    // print all entries in the phonebook
    console.log('phonebook:');
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        });
        mongoose.connection.close();
    });
} else {
    const name = process.argv[3];
    const number = process.argv[4];

    const newPerson = new Person({
        name: name,
        number: number,
    });

    newPerson.save().then(result => {
        console.log(`added ${newPerson.name} number ${newPerson.number} to phonebook`);
        mongoose.connection.close();
    });
};

/*
// will return all important notes:
Note.find({ important: true }).then(result => {
    result.forEach(note => {
        console.log(note)
    });
});
*/