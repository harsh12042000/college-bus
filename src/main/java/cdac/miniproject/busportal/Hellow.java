package cdac.miniproject.busportal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hellow {

	@RequestMapping("/hello")
	public String hello() {
		return "Welcome to Spring Boot and REST API Development";
	}
}
