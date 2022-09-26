const express = require('express');
const { getAllUser, createUser } = require('../controllers/userController');


// init router
const router = express.Router();

// user router
router.get('/', getAllUser);
router.post('/', createUser);





// export router
module.exports = router;