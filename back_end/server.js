const express = require('express');
const bcrypt = require('bcrypt-nodejs');

const app = express();


app.use(express.json());

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
    login: [
        {
            id: '987',
            hash: '',
            email: 'john@gmail.com'
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) => {


    bcrypt.compare("apple", '$2a$10$0GWs6rlWleTbwD2JXanFL.iLlWKpXCRfN0.KqW2HbNv7dTSeJRn8.', function (err, res) {
        console.log('first guess', res)
    });
    bcrypt.compare("veggies", '$2a$10$0GWs6rlWleTbwD2JXanFL.iLlWKpXCRfN0.KqW2HbNv7dTSeJRn8.', function (err, res) {
        console.log('second guess', res)
    });

    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password)
        res.json('success');
    else
        res.status(400).json('error logging in');
});

app.post('/register', (req, res) => {

    database.users.push({
        id: Number(database.users.at(-1).id) + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users.at(-1));
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    database.users.forEach(user => {
        if (user.id === id)
            return res.json(user);
    })
    res.status(404).json('no such user');
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




// Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {

// });
// bcrypt.compare("veggies", hash, function(err, res) {

// });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})