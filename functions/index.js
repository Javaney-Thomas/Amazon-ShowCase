const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51Nl6cTEHx6HMgKSKAKGyvtbMNrHp1snmZZn8U9uQC3bZLqqOT1w5tRG6A7N54eRvNG2gRF8boRBL9657fH2u17AB00DH1trXMy')


//To set up an API these are what you need 


//API

//APP CONFIG
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello, this is your req test'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received!! for this amount = ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currrency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

//Listen command
exports.api = functions.https.onRequest(app)

//Example Endpoint
//http://127.0.0.1:5001/clone-b3542/us-central1/api



/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
