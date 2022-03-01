import swaggerUi from "swagger-ui-express";

import { app } from ".";
import swaggerFile from "../swagger.json";

// app.use("/api-docs", swaggerUi.server, swaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));
