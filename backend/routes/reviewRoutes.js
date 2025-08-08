import express from 'express';
import auth from '../middlewares/AuthMiddleWare.js';
import { create_review, get_reviews } from '../controller/reviewController.js';
const router = express.Router();

router.post("/create-review",auth,create_review);
router.get("/get-all-reviews",get_reviews);

export default router;