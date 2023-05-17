import express from "express";
import { authenticateUser } from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";
import {
  getAllJobs,
  deleteJob,
  updateJob,
  createJob,
  showStats,
} from "../controllers/jobsController.js";

const router = express.Router();

router
  .route("/")
  .get(authenticateUser, getAllJobs)
  .post(authenticateUser, testUser, createJob);
router.route("/stats").get(authenticateUser, showStats);
router
  .route("/:id")
  .delete(authenticateUser, testUser, deleteJob)
  .patch(authenticateUser, testUser, updateJob);

export default router;
