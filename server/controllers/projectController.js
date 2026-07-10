const Project = require("../models/Project");
const uploadToCloudinary = require("../utils/uploadToCloudinary");

const getProjects = async (req, res) => {
  try {
    const project = await Project.find();

    if (!project) {
      res.status(400).json({
        message: "No records found",
      });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createProject = async (req, res) => {
  try {
    const imageResult = await uploadToCloudinary(req.file.buffer, "projects");
    const project = await Project.create({
      ...req.body,
      image: imageResult.secure_url,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      res.status(400).json({
        message: error.message,
      });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
};

// res.json([
//         {
//     title: "My Portfolio",
//     description:
//       "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
//     image: "/projects/project1.jpg",
//     tags: ["React", "Tailwind CSS", "JavaScript"],
//     url: "#",
//     github: "#",
//   },
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
//     image: "/projects/project2.jpg",
//     tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
//     url: "#",
//     github: "#",
//   },
//   {
//     title: "Multi-Unit Apartment Website",
//     description:
//       "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
//     image: "/projects/project3.jpg",
//     tags: ["React", "OpenAI", "Python", "FastAPI"],
//     url: "#",
//     github: "#",
//   },
//   {
//     title: "Food Business Website",
//     description:
//       "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
//     image: "/projects/project4.jpg",
//     tags: ["React", "Socket.io", "MongoDB", "Redis"],
//     url: "#",
//     github: "#",
//   }
//     ]);
