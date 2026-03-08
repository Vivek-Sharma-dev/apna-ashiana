import { listingSchema } from "../schemas/listingSchema";


const validationMiddleware =  (req, res, next) => {
  const result = listingSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }
  next();
};

export default validationMiddleware;
