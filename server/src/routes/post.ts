import { Router } from 'express';
const router = Router();
import {
    addBook, 
    getbook,
    showAll
} 
from '../controller/postController'

router.post('/addbook', addBook)
router.post('/getbook', getbook)
router.get('/showAll', showAll)



export default router