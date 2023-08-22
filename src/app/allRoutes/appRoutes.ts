import { Router } from "express";
import { GetMovieList } from "./get/getMovieList";
import { PostCreateMovie } from "./post/postCreateMovie";
import { PutEditMovies } from "./put/putEditMovies";
import { DeleteMovie } from "./delete/deleteMovie";
import { GetMovieId } from "./get/getMovieById";


const baseRouter = Router();
const prefix = "/api";

// GET
baseRouter.get(`${prefix}/Movies`, GetMovieList);
baseRouter.get(`${prefix}/Movies/:id`, GetMovieId);

// POST
baseRouter.post(`${prefix}/Movies`, PostCreateMovie);

// PUT
baseRouter.patch(`${prefix}/Movies/:id`, PutEditMovies);

// DELETE
baseRouter.delete(`${prefix}/Movies/:id`, DeleteMovie);

export { baseRouter };