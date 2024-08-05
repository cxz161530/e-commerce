const ProductModel = require("../models/product");
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const PostModel = require('../models/post')

const { v4: uuidv4 } = require('uuid');
// uuid, helps generate our unique ids
const S3 = require('aws-sdk/clients/s3');
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();

const BUCKET_NAME = process.env.S3_BUCKET
module.exports = {
    index,
    create,
    productBio
}

async function index(req, res) {
    try {
        const products = await ProductModel.find({});
        res.status(200).json(products);

    } catch (err) {
        res.json({error: err})
    }
}
function create(req,res){

    console.log(req.file, req.body, req.user)
     // check to make sure a file was sent over

    const filePath = `project-3/${uuidv4()}-${req.file.originalname}`
    const params = {Bucket:BUCKET_NAME, Key: filePath, Body: req.file.buffer}
    s3.upload(params, async function(err,data){
        console.log("========");
        console.log(err, 'err from aws')
        console.log('========')
        if(err)return res.status(400).json({err: "Check Terminal with aws"})
        try {
            const product = await ProductModel.create({
                photoUrl: data.Location,
                ...req.body


            })
            res.status(201).json({product})
        }catch(err){
            console.log(err)
            res.status(400).json({err})

    
        }


    })
   
}
async function productBio(req, res) {
    try {
        //find product by product name from param
        const product = await ProductModel.findOne({productName: req.params.productName});
        if(!product) return res.status(404).json({error: "no product find"})
        //send entire obj
        res.json(product)



    } catch (err) {
        res.json({error: err})
    }
}