import express from "express";

const app = express();

app.get("*", (request, response) => {
  response.send({ hello: "express" });
});

app.listen(3000, (error) => {
  if (error) {
    console.log("Error: ", "can not run the server.");
  } else {
    console.log("Server running on port 3000");
  }
});
