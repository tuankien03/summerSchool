import StudentService from '../service/student.service.js';
class StudentController {
    createStudent = async (req, res, next) => {
        const {name, dob, email, phone, address, levelknowledge, status} = req.body;
        const existStudent = await StudentService.getStudentByEmail(email);
        if (existStudent) { 
            return res.status(400).json({
                message: 'Student already exists'
            });
        }

        console.log(req.body);
        console.log({name, dob, email, phone, address, levelknowledge, status});

        const student = await StudentService.createStudent(name, dob, email, phone, address, levelknowledge, status);
        return res.status(201).json({
            message: 'Student created',
            metadata: student || ''
        });
    }

    getStudentById = async (req, res, next) => {
      try {
        const student = await StudentService.getStudentById(req.params.id);
        return res.json({
            message: 'Student found',
            metadata: student
        });
      } catch (error) {
        return res.status(500).json({
            message: error.message
        });
      }
    }

    getStudents = async (req, res, next) => {
        try {
            const students = await StudentService.getStudents();
            return res.json({
                message: 'Students found',
                metadata: students
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

    updateStudentById = async (req, res, next) => {
        const {name, dob, email, phone, address, levelknowledge, status} = req.body;
        const student = await StudentService.updateStudentById(req.params.id, name, dob, email, phone, address, levelknowledge, status);
        return res.json({
            message: 'Student updated',
            metadata: student
        });
    }

    deleteStudentById = async (req, res, next) => {
        try {
            const student = await StudentService.deleteStudentById(req.params.id);
            if (!student) {
                return res.status(404).json({
                    message: 'Student not found'
                });
            }
            return res.json({
                message: 'Student deleted',
                metadata: student
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

}

export default new StudentController();