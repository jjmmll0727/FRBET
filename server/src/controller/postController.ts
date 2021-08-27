/**
 * controller에서 함수만 정의를 할
 */

'use strict';

import * as express from 'express';
import post_interface from '../interface/post';
import router from '../routes';
import bookConfig from '../config/aws/book'
import AWS from "aws-sdk";

export function returning(info : post_interface){
    const book = info
    return book;            
}

export async function addBook(info : post_interface){
    const newbook = info
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
    return result

}

export async function getbook(title : String){
    const book_title = title
    console.log(typeof book_title)
    // 이게 왜 string 이 아니고 object 일까
    AWS.config.update(bookConfig.aws_iam_info);
    const docClient = new AWS.DynamoDB.DocumentClient();

    
    const params = {
        TableName : bookConfig.aws_table_name,
        KeyConditionExpression: "title = :title",
        ExpressionAttributeValues: {
            ":title": book_title
        }
        // TableName : bookConfig.aws_table_name,
        // KeyConditionExpression: 'title = :i',
        // ExpressionAttributeValues: {
        //     ':i' : book_title
        // }
    };
    console.log(params)
    const result = await docClient.query(params).promise()
    console.log(result)
    return result

}