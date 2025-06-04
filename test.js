// Hello World JavaScript file with a bug

function greetUser(name) {
    // Bug: Using undefined variable 'username' instead of parameter 'name'
    console.log("Hello, " + username + "!");
}

// This will throw a ReferenceError
greetUser("World");

// Another attempt with a different bug
const message = "Helloo World";
console.log(mesage); // Bug: Typo in variable name

// SQL Injection vulnerability - CodeQL WOULD detect this
app.get('/user', (req, res) => {
  const query = "SELECT * FROM users WHERE id = " + req.query.id; // VULNERABLE
  db.query(query, callback);
});

// XSS vulnerability - CodeQL WOULD detect this
app.get('/search', (req, res) => {
  res.send("<h1>Results: " + req.query.term + "</h1>"); // VULNERABLE
});

// Hardcoded secrets - CodeQL WOULD detect this
const apiKey = "sk-1234567890abcdef"; // VULNERABLE
