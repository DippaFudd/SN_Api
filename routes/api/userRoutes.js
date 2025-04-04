const router = require('express').Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
