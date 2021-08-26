import express from 'express';
const app: express.Application = express();
import postRouter from '../src/routes/post';
import indexRouter from '../src/routes/index';

app.use(express.json()) // 이 한문장의 순서때문에 request를 받지 못한 것...
app.use(express.urlencoded({ extended: false }));

// error handler
app.use(function(
  err: any,
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// get
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello express');
});

app.use('/', indexRouter);
app.use('/post', postRouter)

app.listen(3010, () => {
    console.log('실행중...');
});




export default app;

