import MongoClient from 'mongodb';
const URL = "mongodb+srv://jwilliams:1gTqyPEOe7nbuAC0@cluster0.oewwc.mongodb.net/test";

MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({beds: {$gte: 5}, price: {$lte: 200}, "review_scores.review_scores_rating": {$gte: 99}});

    cursor.forEach(document =>{
        console.log(document.name);
    }, () => {
        connection.close();
    })
})

.catch(error => {
    console.log("Error: " + error);
})