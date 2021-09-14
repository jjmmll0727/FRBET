"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const postController_1 = require("../controller/postController");
router.post('/addbook', postController_1.addBook);
router.post('/getbook', postController_1.getbook);
router.get('/showAll', postController_1.showAll);
exports.default = router;
