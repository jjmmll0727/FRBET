import { Router } from 'express';
import express, { Application, Response, Request } from 'express';
var router = Router();
import {
    addBook, 
    getbook
} 
from '../controller/postController'

import post_interface from '../interface/post'

// router.post('/showall', (req : Request, res : Response) => {
//     try{
//         const info : post_interface = req.body
//         console.log(req.body)
//         const result = returning(info);
//         res.status(200).send(result)
//         console.log('success')
//     }catch(err){
//         console.log(err)
//         res.send(err)
//     }
    
// })

router.post('/addbook', addBook)

router.post('/getbook', getbook)


export default router