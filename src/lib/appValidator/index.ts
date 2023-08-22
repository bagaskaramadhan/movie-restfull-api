import * as Joi from "types-joi";

export function NewValidator() {
	return {
		validate: (schema: Joi.ObjectSchema<any>, data: any) => validate(schema, data),
		defaultPostBodyFormat: () => defaultPostBodyFormat,
		defaultPutBodyFormat: () => defaultPutBodyFormat,
		joi: () => Joi,
	};
}

function validate(schema: Joi.ObjectSchema<any>, data: any) {
	const { error, value } = schema.validate(data);
	return {
		throwErrorIfNeeded: () => {
			if (error) {
				let err = "";
				for (const errors of error.details) {
					err = errors.message;
				}
				throw err;
			}
			return value;
		},
	};
}

const defaultPostBodyFormat = Joi.object({});
const defaultPutBodyFormat = Joi.object({});