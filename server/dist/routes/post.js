"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var router = express_1.Router();
const postController_1 = require("../controller/postController");
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
router.post('/addbook', postController_1.addBook);
router.post('/getbook', postController_1.getbook);
exports.default = router;
