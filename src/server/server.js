import express from "express";
import dotenv from "dotenv";

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === "development") {
  console.log("Enviroment: ", "Working on develop");
} else if (ENV === "production") {
  console.log("Enviroment: ", "Working on production");
}

app.get("*", (request, response) => {
  response.send({ hello: "express" });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error: ", "can not run the server.");
  } else {
    console.log("Server running on port 3000");
  }
});
