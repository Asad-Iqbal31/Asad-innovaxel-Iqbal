const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const uri = "mongodb+srv://root:JZcqgPsuxtKM4V7y@cluster01.ykff7bw.mongodb.net/?retryWrites=true&w=majority";

// MongoDB connection
mongoose
  .connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});