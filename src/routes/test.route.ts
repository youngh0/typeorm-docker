import express from 'express';

const router = express.Router();

router.get('/hello', (req,res) => res.send("hello1"));
router.get('/test', (req,res) => res.send("test"));
router.get('/test1', (req,res) => res.send("test1"));
router.get('/test2', (req,res) => res.send("test2"));
router.get('/test3', (req,res) => res.send("test3"));


export = router;