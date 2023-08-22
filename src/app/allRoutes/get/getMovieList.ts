import { RequestHandler } from "express";
import { Movie } from "../../../dtoEntity/movie";

export const GetMovieList: RequestHandler = async (req, res, { }) => {
	try {
        const movies = await Movie.find();
		return res.status(200).send(movies);
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server error");
	}
};