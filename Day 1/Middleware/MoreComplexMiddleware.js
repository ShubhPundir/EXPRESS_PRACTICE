var express = require('express');
var app = express();

// Middleware 1: Log Request
app.use((req, res, next) => {
   console.log("Middleware 1: Request logged at " + Date.now());
   next();
});

// Middleware 2: Authenticate User
app.use((req, res, next) => {
   if (req.headers['authorization'] === 'mysecrettoken') {
       console.log("Middleware 2: User authenticated");
       next();
   } else {
       res.status(403).send('Forbidden');  // End the request here if not authenticated
   }
});

// Route Handler
app.get('/', (req, res) => {
   res.send('Hello, world!');
});

app.listen(3000, () => {
   console.log('Server running on port 3000');
});
