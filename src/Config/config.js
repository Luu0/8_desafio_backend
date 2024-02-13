import dotenv from "dotenv";


const enviroment = "dev";

dotenv.config({
  path:enviroment === "production"?"src/config/.env.production": ".src/config/.env.development"
});

export default{
  port: process.env.PORT,
  urlmongo: process.env.MONGO_URL,
  adminname: process.env.ADMIN_NAME,
  adminpassword: process.env.ADMIN_PASSWORD,

}