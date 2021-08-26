"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var post_1 = __importDefault(require("../src/routes/post"));
var index_1 = __importDefault(require("../src/routes/index"));
app.use(express_1.default.json()); // 이 한문장의 순서때문에 request를 받지 못한 것...
app.use(express_1.default.urlencoded({ extended: false }));
// error handler
app.use(function (err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
// get
app.get('/', function (req, res) {
    res.send('hello express');
});
app.use('/', index_1.default);
app.use('/post', post_1.default);
app.listen(3010, function () {
    console.log('실행중...');
});
exports.default = app;
