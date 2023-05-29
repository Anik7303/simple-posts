import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// for non-production environments
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// middlewares
import { error404, errorsMiddleware } from "./middlewares/index";

// routes
import { testRoutes } from "./routes/index";

// variables
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8000";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(testRoutes);

app.use(error404);
app.use(errorsMiddleware);

app.listen(parseInt(PORT), HOST, () => {
  console.log(`Server address: http://${HOST}:${PORT}`);
});
