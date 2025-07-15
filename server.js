const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const route = require("./routes/todoRoute");
const cors = require("cors");

dotenv.config();
const app = express();

const PORT = process.env.port || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo connected..."))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "https://magnificent-kashata-438f60.netlify.app/",
    credentials: true,
  })
);

// Then add body parser and routes
app.use(express.json());
app.use(route);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
