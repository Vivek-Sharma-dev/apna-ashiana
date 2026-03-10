import { listingSchema } from "../schemas/listingSchema.js";


const validationMiddleware =  (req, res, next) => {
  const result = listingSchema.safeParse(req.body);
  console.log(req.body)
  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }
  next();
};

export default validationMiddleware;
