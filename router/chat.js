// import OpenAI from "openai";
// const express = require("express");
// require("dotenv").config();

// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.post("/chat", async (req, res) => {
//   try {
//     const response = await openai.completions.create({
//       model: "gpt-3.5-turbo-instruct",
//       prompt: "",
//       temperature: 1,
//       max_tokens: 2048,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     });
//     res.send(response);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });
