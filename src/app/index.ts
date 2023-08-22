import express from "express";
import http from "http";
import { Config } from "../lib/config";
import "reflect-metadata";

const config = new Config;
const app = express();
const server = http.createServer(app);

server.listen(config.port);
console.info(`Server running on server ${config.port}`);