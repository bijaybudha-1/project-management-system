import { asyncHandler } from "../utils/async-handler.js";
import { Project } from "../models/project.models.js";
import { ProjectMember } from "../models/projectMember.model.js";
import mongoose from "mongoose";
import { userRolesEnum } from "../utils/constants.js";
import { ApiResponse } from "../utils/api-response.js";

const createProject = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const project = await Project.create({
    name,
    description,
    createdBy: new mongoose.Types.ObjectId(req.user._id),
  });

  await ProjectMember.create({
    user: new mongoose.Types.ObjectId(req.user._id),
    project: new mongoose.Types.ObjectId(project._id),
    role: userRolesEnum.ADMIN,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, project, "Project created successfully"));
});
