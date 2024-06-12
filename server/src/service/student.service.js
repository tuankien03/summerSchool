import bcrypt from 'bcrypt';
import studentModel from '../models/student.model.js';
class StudentService {
  static async createStudent(name, dob, email, phone, address, levelKnowledge, status) {
    try {
      const student = await studentModel.create({
        name: name,
        dob: dob,
        email: email,
        phone: phone,
        address: address,
        levelKnowledge: levelKnowledge,
        status: status
      });
      console.log(student);
      return student;
    } catch (error) {
      return;
    }
  }

  static async getStudentByEmail(email) {
    try {
      const student = await studentModel.findOne({ email: email });
      return student;
    } catch (error) {
      return;
    }
  }
  
  static async getStudentById(id) {
    try {
      const student = await studentModel.findById(id);  
        return student;
    } catch (error) {
        return;
        }
    }

    static async updateStudentById(id, name, dob, email, phone, address, levelKnowledge, status) {
        try {
            const student = await studentModel.findByIdAndUpdate(id, {
                name,
                dob,
                email,
                phone,
                address,
                levelKnowledge,
                status
            }, { new: true });
            return student;
        } catch (error) {
            return;
        }
    }

    static async getStudents() {
        try {
            const students = await studentModel.find();
            return students;
        } catch (error) {
            return;
        }
    }
    static async deleteStudentById(id) {
        try {
            const student = await studentModel.findByIdAndDelete(id);
            return student;
        } catch (error) {
            return;
        }
    }
};

export default StudentService;