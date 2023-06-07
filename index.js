const express = require('express');
const cors = require('cors');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Summer Camp server side is running...')
  })
  
  app.listen(port, () => {
    console.log(`Summer Camp server side is running on port: ${port}`);
  })
