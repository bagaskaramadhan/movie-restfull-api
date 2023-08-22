import { RequestHandler } from "express";
import { NewValidator } from "../../../lib/appValidator";
import { InterfaceFrom } from "types-joi";
import { Movie } from "../../../dtoEntity/main";

export const DeleteMovie: RequestHandler = async (req, res, { }) => {
	try {
		const validator = NewValidator();
		const params = validator.joi().object({ id: validator.joi().string() });
		const param: InterfaceFrom<typeof params> = validator.validate(params, req.params).throwErrorIfNeeded();

		const checkId = await Movie.findOneBy({
			id: param?.id
		});
		if (!checkId) {
			return res.status(400).send({ errMessage: "id not found" });
		} else {
			await Movie.delete({
				id: param?.id
			});
		}
		return res.sendStatus(200);
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
};