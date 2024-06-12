import express from 'express';
import studentController from '../../controller/student.controller.js';

const router = express.Router();

router.get('/student/:id',studentController.getStudentById);
router.post('/student/create',studentController.createStudent);
router.get('/students',studentController.getStudents);
router.delete('/student/delete/:id',studentController.deleteStudentById);
router.patch('/student/update/:id',studentController.updateStudentById);



export default router;