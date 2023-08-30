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

export default {
    createPost
}