const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'mere',
            entries: 0,
            joined: new Date()
        },
    ],
}

app.get('/', (req, res) => {
    res.json(database.users);
})

//This is for signing in and will change
app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json(database.users[0]);
    } else {
        res.status(400).json('error logging in');
    }
});

//This is for registering a new user and will not change
app.post('/register', (req, res) => {

    database.users.push({
        id: String(Number(database.users.at(-1).id) + 1),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users.at(-1));
});

app.put('/image', (req, res) => {
    const { id } = req.body;
    database.users.forEach(user => {
        if (user.id === id) {
            user.entries++;
            return res.json(user.entries);
        }
    })
    res.status(404).json('no such user');
});


app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    database.users.forEach(user => {
        if (user.id === id)
            return res.json(user);
    })
    res.status(404).json('no such user');
});





app.listen(3000, () => {
    console.log('Server is running on port 3000');
})