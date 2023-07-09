package cdac.miniproject.busportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cdac.miniproject.busportal.entity.Driver;
import cdac.miniproject.busportal.repository.DriverRepository;

@Service
public class DriverService {

	@Autowired
	private DriverRepository driverRepo;
	
	public void add(Driver d) {
		driverRepo.save(d);
	}

	public List<Driver> getAllDrivers() {
		return driverRepo.findAll();
	}
	
}
