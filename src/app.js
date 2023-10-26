import "dotenv/config";
import express from "express";
import cors from "cors";

import DBconnect from "./config/database.js";
import { createRoles } from "./utils/createRoles.js";
import { createUserAdmin } from "./utils/createUserAdmin.js";

import web from "./routes/web.js";
import auth from "./routes/auth.js";
import api from "./routes/api.js";
import _404 from "./routes/_404.js";
import _500 from "./routes/_500.js";

DBconnect();

await createRoles();
await createUserAdmin();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));

app.use('/', web);
app.use('/auth', auth);
app.use('/api', api);
app.use('/', _404);
app.use('/', _500);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}.`);
});