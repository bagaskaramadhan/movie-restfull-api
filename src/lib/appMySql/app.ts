// MYSQL
import * as mysql from "mysql2";
import { Config } from "../config";
import { DataSource } from "typeorm";
import { Movie } from "../../dtoEntity/main";

const config = new Config();
export const connectionMySQL = async () => {

	const connection = mysql.createConnection({
		host: config.dbHost,
		user: config.dbUsername,
		password: config.dbPassword,
		database: config.dbDatabase,
		port: config.dbPort
	});

	connection.connect((err) => {
		if (err) {
			console.log("Failed Connect", err);
		} else {
			console.log(`CONNECTED ON ${config.dbDatabase}`);
		}
	});
};

export const AppDataSource = new DataSource({
	type: "mysql",
	host: config.dbHost,
	port: config.dbPort,
	username: config.dbUsername,
	password: config.dbPassword,
	database: config.dbDatabase,
	entities: [Movie],
    synchronize: false
});