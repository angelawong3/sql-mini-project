const express = require("express");

// use port from heroku or 3001
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
