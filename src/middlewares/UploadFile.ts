import { NextFunction, Request, Response } from "express";
import * as multer from "multer";

export const upload = (fieldName: string) => {
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, "src/uploads/");
		},
		filename: function (req, file, cb) {
			cb(null, `${file.fieldname} - ${Date.now()}.png`);
		},
	});

	const uploadFile = multer({ storage: storage });

	return (req: Request, res: Response, next: NextFunction) => {
		uploadFile.single(fieldName)(req, res, function (error: any) {
			if (error) {
				if (
					error instanceof multer.MulterError &&
					error.code === "LIMIT_UNEXPECTED_FILE"
				) {
					return next();
				}

			} else {
				if (req.file) {
					res.locals.filename = req.file.filename;
				}
				next();
			}
		});
	};
};