const express= require('express')
const mongoose=  require('mongoose')
const router = express.Router()




// Define a route
router.get('/api', (req, res) => {
    res.json({ users: ['userOne', 'userTwo', 'userThree'] });
  });

  module.exports= router;