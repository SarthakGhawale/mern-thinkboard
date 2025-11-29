import express from "express";
import {createnote,getNoteById, deletenote, getAllnotes, updatenote} from "../controllers/notescontroller.js"

const router = express.Router();

router.get("/",getAllnotes)
router.get("/:id",getNoteById)
router.post("/",createnote)
router.put("/:id",updatenote)
router.delete("/:id",deletenote)

export default router;

