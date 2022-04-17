import express from 'express';

const router = express.Router();

router.get('/hello', (req,res) => res.send("hello"));
router.get('/test', (req,res) => res.send("test"))

export = router;