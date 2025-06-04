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
