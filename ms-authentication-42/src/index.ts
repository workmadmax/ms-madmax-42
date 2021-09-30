import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();
//conf App
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//conf routes
app.use(usersRoute);

app.use(statusRoute)
//start server
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});
