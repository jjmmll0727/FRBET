import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(_req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/home', function(_req, res) {
    res.json({ message: 'You are in the home directory' });
});

export default router;