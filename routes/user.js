const express = require('express');
const { getAllUser, createUser, singleUser, deleteUser, updateUser } = require('../controllers/userController');


// init router
const router = express.Router();

// user router
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(singleUser).delete(deleteUser).put(updateUser).patch(updateUser);





// export router
module.exports = router;