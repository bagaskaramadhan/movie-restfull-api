import { RequestHandler } from "express";
import { NewValidator } from "../../../lib/appValidator";
import { InterfaceFrom } from "types-joi";
import { Movie } from "../../../dtoEntity/main";
import dayjs from "dayjs";

export const PostCreateMovie: RequestHandler = async (req, res, { }) => {
    try {
        const validator = NewValidator();
        const bodyFormat = validator.defaultPostBodyFormat().keys({
            title: validator.joi().string().required(),
            description: validator.joi().string().required(),
            rating: validator.joi().number().required(),
            image: validator.joi().string()
        });
        const body: InterfaceFrom<typeof bodyFormat> = validator.validate(bodyFormat, req.body).throwErrorIfNeeded();

        const movie = new Movie();
        movie.title = body.title;
        movie.description = body.description;
        movie.rating = body.rating;
        movie.image = body.image;
        movie.createdAt = dayjs().format("YYYY-MM-DD HH:mm:ss")
        await movie.save();
        return res.status(200).send(movie);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};