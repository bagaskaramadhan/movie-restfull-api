import express from "express";
import http from "http";
import { Config } from "../lib/config";
import * as connectionMySQL from "../lib/appMySql/app";
import { baseRouter } from "./allRoutes/appRoutes";
import "reflect-metadata";

const config = new Config;
const app = express();
connectionMySQL.connectionMySQL();
async function main() {
	try {
		await connectionMySQL.AppDataSource.initialize();
	} catch (e) {
		return;
	}
}
main();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const server = http.createServer(app);

server.listen(config.port);
console.info(`Server running on server ${config.port}`);
app.use("/", baseRouter);