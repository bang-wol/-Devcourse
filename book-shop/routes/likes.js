const express = require('express');
const router=express.Router();
const { addlikes, removeLikes } = require('../controller/LikeController');

router.use(express.json());

router.post('/:id', addlikes);
router.delete('/:id', removeLikes);

module.exports=router;
