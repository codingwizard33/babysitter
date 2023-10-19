import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import DBconnect from "./config/database.js";
import { createRoles } from "./utils/createRoles.js";
import { createUserAdmin } from "./utils/createUserAdmin.js";
import web from "./routes/web.js";
import auth from "./routes/auth.js";
import api from "./routes/api.js";

dotenv.config();

DBconnect();

await createRoles();
await createUserAdmin();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));

app.use('/', web);
app.use('/auth', auth);
app.use('/api', api);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}.`);
});