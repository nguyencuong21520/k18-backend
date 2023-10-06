import express from 'express';
import AccountRouter from './account';
import CourseRouter from './course';
import CourseLevelRouter from './courseLevel';
import TimeScheduleRouter from './timeSchedule';
import ClassRouter from './class';
import LocationRouter from './location';
import BookTeacherRouter from './bookTeacher';
import PreTeacherRouter from './preTeacher';
import TeacherRouter from './teacher';
import ClassSessionRouter from './classSession';
import TeacherScheduleRouter from './teacherSchedule';
import TeacherRegisterCouseRouter from './teacherRegisterCourse';
import FeedbackRouter from './feedback';
import ClassTeacherPointRouter from './classTeacherPoint';
import RecruitmentRouter from './recruitment';
import TERouter from './te';

const RootRouter = express.Router();

RootRouter.use('/account', AccountRouter);
RootRouter.use('/auth', AccountRouter);
RootRouter.use('/course', CourseRouter);
RootRouter.use('/course/level', CourseLevelRouter);
RootRouter.use('/time-schedule', TimeScheduleRouter);
RootRouter.use('/class', ClassRouter);
RootRouter.use('/class-teacher-point', ClassTeacherPointRouter);
RootRouter.use('/location', LocationRouter);
RootRouter.use('/book-teacher', BookTeacherRouter);
RootRouter.use('/pre-teacher', PreTeacherRouter);
RootRouter.use('/teacher', TeacherRouter);
RootRouter.use('/teacher-schedule', TeacherScheduleRouter);
RootRouter.use('/class-session', ClassSessionRouter);
RootRouter.use('/teacher-registercourse', TeacherRegisterCouseRouter);
RootRouter.use('/feedback', FeedbackRouter);
RootRouter.use('/recruitment', RecruitmentRouter);
RootRouter.use('/te', TERouter);


export default RootRouter;