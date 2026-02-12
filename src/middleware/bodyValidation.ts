import {ZodError, ZodType} from "zod"
import type {Request, Response, NextFunction} from "express" 


export const bodyValidation = function (schema : ZodType) {
    const validation = (req : Request, res: Response, next: NextFunction) => {
        try {
            const bodyParser = schema.parse(req.body);
            req.body = bodyParser;
            next();
        } catch(e) {
            if (e instanceof ZodError) {
                return res.status(400).json({
                    details: e.issues.map(function catchBodyIssue(error) {
                        return {
                            issue: error.path.join("."),
                            message: error.message
                        }
                    })
                })
            }
            next(e);
        }
    }
    return validation;
}