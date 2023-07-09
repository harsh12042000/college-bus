package cdac.miniproject.busportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import cdac.miniproject.busportal.entity.Bus;
import cdac.miniproject.busportal.entity.Driver;
import cdac.miniproject.busportal.service.BusService;
import cdac.miniproject.busportal.service.DriverService;

@RestController
@CrossOrigin
public class DriverController {

	@Autowired
	private DriverService driverService;
	
	@Autowired
	private BusService busService;
	
	@PostMapping("/add-driver")
	public String add(@RequestBody Driver d) {
		
//		Bus bus = busService.getBus(d.getBus().getBus_id());
//		d.setBus(bus);
		driverService.add(d);
		return "Driver Added Successfully !";
	}
	
	@GetMapping("/driver-details")
	public List<Driver> get() {
		return driverService.getAllDrivers();
	}
	
}
