package cdac.miniproject.busportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import cdac.miniproject.busportal.entity.Bus;
import cdac.miniproject.busportal.entity.Student;
import cdac.miniproject.busportal.service.StudentService;

@RestController
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/add-student")
	public String add(@RequestBody Student d) {
		studentService.add(d);
		return "Student Added Successfully !";
	}
	
	@PostMapping("/login")
	public Student login(@RequestBody Student d) {
		return studentService.authenticateUser(d);
	}
	
	@GetMapping("/student-details")
	public List<Student> get() {
		return studentService.getAllStudents();
	}
}
