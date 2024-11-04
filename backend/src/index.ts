import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUI from 'swagger-ui-express'
import specs from "./docs/swagger-config";
import responseText from "./assets/response.text";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import companyRoute from "./routes/company.route";
import offerRoute from "./routes/offer.route";
import profileRoute from "./routes/profile.route";
import experienceRoute from "./routes/experience.route";
import studiesRoute from "./routes/studies.route";
import favoriteRoute from './routes/favorite.route'
import applicationRoute from './routes/application.route'


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}))

// Documentacion de API
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute);
app.use('/api/company', companyRoute)
app.use('/api/offers', offerRoute)
app.use('/api/profiles', profileRoute)
app.use('/api/applications', applicationRoute)
app.use('/api/experience', experienceRoute)
app.use('/api/favorites', favoriteRoute)
app.use('/api/studies', studiesRoute)

app.get("/api/", (req, res) => {
  res.send(responseText);
});

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || "development";
app.listen(port, () => {
  if (environment === "production") {
    console.log(`[server]: Server is running at the Railway public URL`);
  } else {
    console.log(`[server]: Server is running at http://localhost:${port}/api/`);
  }
});
