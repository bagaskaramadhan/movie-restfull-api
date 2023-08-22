/* eslint-disable no-undef */
import * as dotenv from "dotenv";
dotenv.config();


export type IConfig = Config;
export class Config {
	port = process.env.NODE_PORT || "3001";
	dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306;
	dbHost = process.env.DB_HOST || "localhost";
	dbPassword = process.env.DB_PASSWORD || "bagaskaramadhan97";
	dbUsername = process.env.DB_USERNAME || "root";
	dbDatabase = process.env.DB_DATABASE || "movie";
}