package cdac.miniproject.busportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cdac.miniproject.busportal.entity.Bus;
import cdac.miniproject.busportal.entity.Student;
import cdac.miniproject.busportal.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository studentRepo;
	
	public void add(Student student) {
		studentRepo.save(student);
	}

	public Student authenticateUser(Student d) {
		return studentRepo.findByPRNAndpassword(d.getPrn(), d.getPassword());
	}

	public List<Student> getAllStudents() {
		return studentRepo.findAll();
	}
}
