import { Router } from 'express';
import express, { Application, Response, Request } from 'express';
var router = Router();
import {
    returning, 
    addBook, 
    getbook
} 
from '../controller/postController'

import post_interface from '../interface/post'

router.post('/showall', (req : Request, res : Response) => {
    try{
        const info : post_interface = req.body
        console.log(req.body)
        const result = returning(info);
        res.status(200).send(result)
        console.log('success')
    }catch(err){
        console.log(err)
        res.send(err)
    }
    
})

router.post('/addbook', async (req : Request, res : Response) => {
    try{
        const info : post_interface = req.body
        const result = await addBook(info);
        console.log(result)
        res.status(200).send(result)

    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.post('/getbook', async (req : Request, res : Response) => {
    try{
        const title : String = req.body.title
        const result = await getbook(title)
        res.status(200).send(result)
    }catch(err){
        console.log(err);
        res.send(err)
    }
})

export default router