package cdac.miniproject.busportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import cdac.miniproject.busportal.entity.Bus;
import cdac.miniproject.busportal.service.BusService;

@RestController
@CrossOrigin
public class BusController {

	@Autowired
	private BusService busService;
	
	@PostMapping("/add-bus")
	public String add(@RequestBody Bus bus) {
		busService.add(bus);
		return "Bus Added Successfully !";
	}
	
	@GetMapping("/bus-details")
	public List<Bus> get() {
		return busService.getAllBus();
	}
}
