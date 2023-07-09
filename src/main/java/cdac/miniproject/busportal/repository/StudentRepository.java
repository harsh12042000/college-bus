package cdac.miniproject.busportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import cdac.miniproject.busportal.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {


	@Query("SELECT s FROM Student s WHERE s.prn = ?1 AND s.password = ?2")
	public Student findByPRNAndpassword(String prn, String password);

}