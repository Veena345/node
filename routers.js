
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3601;

app.use(bodyParser.json());

let users = [
    {
        firstname: "veena",
        lastname: "muddhuluru",
    },
    {
        firstname: "suji",
        lastname: "us",
    },
]// body 
/*
app.get('/users', (req, res) => {
    res.json(users);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
//parmes
app.get('/users/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.send(`User: ${firstname} ${lastname}`);
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//query
/*
app.post('/users', (req, res) => {

    const {firstname,lastname} = req.query; 
    console.log(req.query);
    

    const newUser = req.query;
    newUser.id = uuidv4();
    users.push(newUser);
    res.send(`${newUser.firstname} ${newUser.lastname} `);

    
}

// params 
app.post('/users/:firstname/:lastname', (req, res) =>{

    const {firstname,lastname} = req.params; 
    console.log(req.params);
    

    const newUser = req.params;
    newUser.id = uuidv4();
    users.push(newUser);
    res.send(`${newUser.firstname} ${newUser.lastname} `);
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

//body
app.post('/users',(req,res)=>{
    
    console.log(req.body)
    const newuser= req. body;
    newuser.id=uuidv4();
    users.push(newuser)
    
    res.send(`${newuser.firstname} ${newuser.lastname} `);
}
)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/



//put body
/*
app.use(express.json());


app.put('/users', (req, res) => {
    const user = req.body.user;
    const { firstname, lastname } = req.body; 

    
    res.send(`Updated user  with name: ${firstname} ${lastname}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//params
app.use(express.json());

app.put('/users/:firstname/:lastname', (req, res) => {
    const user = req.params.user;
    const { firstname, lastname } = req.params;
    res.send(`Updated user with name: ${firstname} ${lastname}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// delete body
app.delete('/users', (req, res) => {
    const { id } = req.body;
    res.send(`Deleted user with id: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//delete query
app.delete('/users', (req, res) => {
    const { id } = req.query;
    res.send(`Deleted user with id: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// delete params
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Deleted user with id: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// head query
app.head('/users', (req, res) => {
    const { firstname, lastname } = req.query;
    console.log('Received query parameters:', { firstname, lastname });
    res.set({
        'Content length': '175',

        ' location': 'desktop'
    });
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//head body
app.head('/users', (req, res) => {
    const { firstname, lastname } = req.body;
    console.log('Received body parameters:', { firstname, lastname });
    res.set({
        'Content length': '175',

        ' location': 'desktop'
    });
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/
// head params

app.head('/users', (req, res) => {
    const { firstname, lastname } = req.params;
    console.log('Received params parameters:', { firstname, lastname });
    res.set({
        'Content length': '175',

        ' location': 'desktop'
    });
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});































/*
app.post('/users',(req,res)=>{
    const newusers= req. body;
    newusers.id=uuidv4();
    users.push(newusers)
    
    res.send(`${newusers.firstname}is added`)
}
)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  */






/*
app.listen(PORT,(error)=>{
    if (error){
        console.log(error)

    }
    else{
        console.log('port is running on',+PORT)
    }
})*/


/*

app.put('/update-url', (req, res) => {
    const { newPort } = req.body;
    const updatedUrl = `http://localhost:${newPort}`;
    res.json({ updatedUrl });
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})*/