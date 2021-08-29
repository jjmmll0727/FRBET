/**
 * javascript와 마찬가지로 함수를 정의하고 구현한다.
 * 라우팅에서 경로 설정
 */
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getbook = exports.addBook = void 0;
const book_1 = __importDefault(require("../config/aws/book"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newbook = req.body;
        aws_sdk_1.default.config.update(book_1.default.aws_iam_info);
        const docClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
        const params = {
            TableName: book_1.default.aws_table_name,
            Item: {
                title: newbook.title,
                author: newbook.author,
                content: newbook.content
            }
        };
        const result = yield docClient.put(params).promise();
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.addBook = addBook;
const getbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book_title = req.body.title;
        aws_sdk_1.default.config.update(book_1.default.aws_iam_info);
        const docClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
        const params = {
            TableName: book_1.default.aws_table_name,
            KeyConditionExpression: "title = :title",
            ExpressionAttributeValues: {
                ":title": book_title
            }
        };
        const result = yield docClient.query(params).promise();
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getbook = getbook;
