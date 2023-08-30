import { ObjectId } from "mongodb";
import { getClient } from "./mongo.db.js";

async function createPost(post) {
    const client = getClient();
    try {
        await client.connect();
        await client.db("pet-shop").collection("posts").insertOne(post);
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function updatePost(post) {
    const client = getClient();
    try {
        console.log(post)
        await client.connect();
        await client.db("pet-shop").collection("posts").updateOne(            
            { "_id": new ObjectId(post._id)},            
            { $set: { ...post.post } }
        );
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function getPosts() {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("pet-shop").collection("posts").find({}).toArray();
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

export default {
    createPost,
    updatePost,
    getPosts
}