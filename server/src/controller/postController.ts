'use strict';

import post_interface from '../interface/post';
import bookConfig from '../config/aws/book'
import AWS from "aws-sdk";
import { Response, Request } from "express"

export const addBook = async(req : Request, res : Response) => {
    try{
        const newbook : post_interface = req.body
        AWS.config.update(bookConfig.aws_iam_info);
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName : bookConfig.aws_table_name,
            Item : {
                title : newbook.title,
                author : newbook.author,
                content : newbook.content
            }
        }
        const result = await docClient.put(params).promise()
        res.status(200).send(result)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

export const getbook = async(req:Request, res: Response) => {
    try{
        const book_title : String = req.body.title
        AWS.config.update(bookConfig.aws_iam_info);
        const docClient = new AWS.DynamoDB.DocumentClient();
    
        
        const params = {
            TableName : bookConfig.aws_table_name,
            KeyConditionExpression: "title = :title",
            ExpressionAttributeValues: {
                ":title": book_title
            }
        };
        const result = await docClient.query(params).promise()
        res.status(200).send(result)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

export const showAll = async(req: Request, res: Response) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        AWS.config.update(bookConfig.aws_iam_info);
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName : bookConfig.aws_table_name,
            //ProjectionExpression: "title, author, content"
        };
        const result = await docClient.scan(params).promise()
        res.status(200).send(result)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}
