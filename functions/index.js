const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HaAqXKCqsHsCKyw6lOu0k92Sh0DPrZ5uNt9PWHs0MgkOrrlK7CsirHdVR34ek2KaG7BNfcSWd1dSmtepODoSSh300RAkyYbr6"
);

// API

// - API config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // it has sub units of the currency
    currency: "usd",
  });
  // Ok- created something
  res.status(201).send({
      clientSecret: paymentIntent.client_secret,
  })

});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-amazon/us-central1/api
