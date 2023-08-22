import { RequestHandler } from "express";
import { NewValidator } from "../../../lib/appValidator";
import { InterfaceFrom } from "types-joi";
import { Movie } from "../../../dtoEntity/main";
import dayjs from "dayjs";

export const PutEditMovies: RequestHandler = async (req, res, { }) => {
    try {
        const validator = NewValidator();
        const bodyFormat = validator.defaultPutBodyFormat().keys({
            title: validator.joi().string(),
            description: validator.joi().string(),
            rating: validator.joi().number(),
            image: validator.joi().string()
        });
        const body: InterfaceFrom<typeof bodyFormat> = validator.validate(bodyFormat, req.body).throwErrorIfNeeded();
        const params = validator.joi().object({ id: validator.joi().string() });
        const param: InterfaceFrom<typeof params> = validator.validate(params, req.params).throwErrorIfNeeded();
        const getMovie = await Movie.findOneBy({ id: param?.id })
        const updateMovie = {
            id: getMovie?.id,
            title : body.title,
            description : body.description,
            rating : body.rating,
            image : body.image,
            updatedAt : dayjs().format("YYYY-MM-DD HH:mm:ss"),
        }
        await Movie.save(updateMovie)
        return res.status(200).send(updateMovie);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};