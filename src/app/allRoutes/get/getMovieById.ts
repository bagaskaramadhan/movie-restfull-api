import { NewValidator } from "../../../lib/appValidator";
import { RequestHandler } from "express";
import { InterfaceFrom } from "types-joi";
import { Movie } from "../../../dtoEntity/movie";

export const GetMovieId: RequestHandler = async (req, res, { }) => {
    try {
        const validator = NewValidator();
        const params = validator.joi().object({ id: validator.joi().string() });
        const param: InterfaceFrom<typeof params> = validator.validate(params, req.params).throwErrorIfNeeded();

        const movies = await Movie.findOneBy({ id: param?.id });
        return res.status(200).send(movies);
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};