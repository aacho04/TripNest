import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app =express();
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
app.use("/posts",postRoute);
app.use("/auth",authRoute);
app.listen(8080,()=>{
    console.log("Server is running ");
})
