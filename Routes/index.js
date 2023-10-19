const router = require('express').Router();
const userController = require("../Controller/user");
const protectUser = require("../Config/authMiddleware");


router.post('/sign-up', userController.signUp);
router.post('/sign-in', userController.signIn);
router.get('/logout', userController.logout);

module.exports = router;