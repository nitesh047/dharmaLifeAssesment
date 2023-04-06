var express = require('express');
var cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const getData = require('./Route.js')
const PORT = process.env.PORT || 5000;
mongoose.connect(
    "mongodb+srv://dharma_user:B4CLfQzOm5kcJRJ2@dljaya0.cdxfz.mongodb.net/dl_jaya_demo",
    
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

  app.use(cors());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use('/api/data',getData)
app.listen(PORT || 5000, () => {
    console.log("Backend server is running!");
  });
