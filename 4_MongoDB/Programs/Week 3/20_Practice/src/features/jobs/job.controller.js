import { customErrorHandler } from "../../middlewares/errorHandler.js";
import { applyJobRepo, createNewJob, findJobRepo } from "./job.repository.js";

export const postJob = async (req, res, next) => {
  // Check if the user is a 'recruiter'
  const userRole = req.user.role; // Assuming the user's role is available in req.user

  if (userRole !== 'recruiter') {
    return next(new customErrorHandler(403, "Only recruiters can post a job"));
  }

  try {
    const resp = await createNewJob(req.body);
    if (resp) {
      res.status(201).json({
        success: true,
        msg: "Job posted successfully.",
        job_description: resp,
      });
    } else {
      res.status(400).json({ success: false, msg: "Bad request" });
    }
  } catch (error) {
    next(new customErrorHandler(400, error));
  }
};

export const applyJob = async (req, res, next) => {
  const job_id = req.params.id;
  const user_id = req.user._id;
  try {
    const job_description = await findJobRepo(job_id);
    if (!job_description) {
      return next(new customErrorHandler(400, "Job not found"));
    }
    const resp = await applyJobRepo(job_id, user_id);
    if (resp) {
      res
        .status(201)
        .json({ success: true, msg: "Job applied successfully", resp });
    } else {
      res
        .status(400)
        .json({ success: false, msg: "You have already applied for this job" });
    }
  } catch (error) {
    next(new customErrorHandler(400, error));
  }
};
