import express from 'express';

const router = express.Router();

router.get('/hello', (req,res) => res.send("hello"));
router.get('/test', (req,res) => res.send("test"));
router.get('/test1', (req,res) => res.send("test1"));

export = router;