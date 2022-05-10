const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");

const app = express();

//initialise middleware
// app.use(logger);

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Members API Route
app.use("/api/members", require("./routes/api/members"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Secrver started on port ${PORT}`));
