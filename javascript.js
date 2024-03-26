
/*

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;
app.use(bodyParser.json());
// Dummy data for initial blog posts
let posts = [
    { id: 1, title: "Introduction ", content: "Express.js is a web application framework for Node.js." },
    { id: 2, title: "Building RESTful APIs with Node.js", content: "Learn how to create RESTful APIs using Node.js and Express." }
];

// Route to get all blog posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Route to add a new blog post
app.post('/posts', (req, res) => {
    const post = req.body;
    posts.push(post);
    res.status(201).json(post);
});

// Route to update a blog post
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.map(post => {
        if (post.id === id) {
            return { ...post, ...req.body };
        }
        return post;
    });
    res.json(posts.find(post => post.id === id));
});

// Route to delete a blog post
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== id);
    res.json({ message: "Blog post deleted" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Dummy data for initial blog posts
let posts = [
    { id: 1, title: "Introduction ", content: "Express.js is a web application framework for Node.js." },
    { id: 2, title: "Building RESTful APIs with Node.js", content: "Learn how to create RESTful APIs using Node.js and Express." }
];

// Route to get all blog posts
app.get('/posts', (req, res) => {
    // Set Content-Type header to application/json
    res.setHeader('Content-Type', 'application/json');
    res.json(posts);
});



app.post('/posts', (req, res) => {
    const post = req.body;
    posts.push(post);
    res.status(201);
    res.setHeader('Content-Type', 'application/json'); // Set Content-Type to JSON
    res.json(post);
});



// Route to update a blog post
// Route to update a blog post
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.map(post => {
        if (post.id === id) {
            return { ...post, ...req.body };
        }
        return post;
    });

    // Set Content-Type header to application/json
    res.setHeader('Content-Type', 'application/json');
    
    // Find the updated post and send it in the response
    const updatedPost = posts.find(post => post.id === id);
    res.json(updatedPost);
});



// Route to delete a blog post
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== id);
    // Set Content-Type header to application/json
    res.setHeader('Content-Type', 'application/json');
    res.json({ message: "Blog post deleted" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






let myHeaders = new Headers({
    "Content-Type": "text/xml",
  });
  
  
  myHeaders = new Headers([["Content-Type", "text/xml"]]);
  
  myHeaders.get("Content-Type");
*/


  // Create a new test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "This is a demo cookie");
myHeaders.append("compression", "gzip");

// Display the key/value pairs
myHeaders.forEach((value, key) => {
  console.log(`${key} ==> ${value}`);
});


