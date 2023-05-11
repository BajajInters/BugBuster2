import BugModel from "../Model/Bug.js";
import mongoose from "mongoose";

export const reportBug = async (req, res) => {
  try {
    const { moduleName, bugTitle, bugDetails, deviceDetails, imageOrVideo } = req.body;
    const bug = new BugModel({moduleName, bugTitle, bugDetails, deviceDetails, imageOrVideo,});
    const savedBug = await bug.save();

    res.status(201).json({
      message: "Bug report created successfully",
      bug: savedBug,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
};

export const getAllBugs = async(req,res) => {
try {
    const bugReports = await BugModel.find();
    res.status(200).json(bugReports);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
}

export const getBugReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const bug = await BugModel.findById(id);
    if (!bug) {
      return res.status(404).json({ message: 'Bug report not found' });
    }
    console.log(bug);
    return res.status(200).json(bug);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
