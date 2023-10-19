const router = require('express').Router();
const userController = require("../Controller/user");

router.post('/sign-up', userController.signUp);
router.post('/sign-in', userController.signIn);
router.get('/logout', userController.logout);

module.exports = router;