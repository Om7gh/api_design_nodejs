import { ZodError, ZodType } from 'zod';
import type { Request, Response, NextFunction } from 'express';

export const paramsValidation = function (schema: ZodType) {
    const validation = (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.params);
            next();
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).json({
                    message: 'Invalid Params format',
                    details: e.issues.map(function catchBodyIssue(error) {
                        return {
                            issue: error.path.join('.'),
                            message: error.message,
                        };
                    }),
                });
            }
            next(e);
        }
    };
    return validation;
};
