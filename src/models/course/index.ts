import mongoose, { Schema } from "mongoose";
import { Collections } from "../../database";

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        unique: true
    },
    syllabus: {
        type: String,
        default: ''
    },
    courseLevel: {
        type: [Schema.Types.ObjectId],
        ref: Collections.COURSELEVEL
    }
})

const CourseModel = mongoose.model(Collections.COURSE, courseSchema);
export default CourseModel;