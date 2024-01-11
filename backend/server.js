import app from "./app.js";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
  dbConnection();
});
