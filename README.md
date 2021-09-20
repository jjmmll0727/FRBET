### express with typescript

기존에 javascript로 할때와 언어만 다르기 때문에 매우 흡사하다.
1. `type`

```js
export const showAll = async(req: Request, res: Response) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        AWS.config.update(bookConfig.aws_iam_info);
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName : bookConfig.aws_table_name,
        };
        const result = await docClient.scan(params).promise()
        res.status(200).send(result)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}
```

변수에 타입을 지정해줘서 타입오류를 줄여준다. 
각 Object의 어떤 function이 있고 각 parameter의 Type을 알려주기 때문에 개발하는데 더 도움이 될 것 같다. 

2. `interface`

```js
interface Post {
    author: string;
    content: string;
    title: string;
}
   
export default Post;
``` 

ES6은 인터페이스를 지원하지 않지만, typescript는 인터페이스를 지원한다. 
흔히 타입체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다. 
함수의 파라미터로 사용되기도 하며, 매개변수의 타입체크를 번거롭게 할 필요도 없다. 

### test
`npm run dev`

<img src="./img/npmrundev.png" width="450px" height="300px"></img>

<br><br>

<img src="./img/postman.png" width="450px" height="300px"></img>



