package cdac.miniproject.busportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cdac.miniproject.busportal.entity.Bus;
import cdac.miniproject.busportal.repository.BusRepository;

@Service
public class BusService {

	@Autowired
	private BusRepository busRepo;
	
	public void add(Bus bus) {
		busRepo.save(bus);
	}
	
	public Bus getBus(int id) {
		return busRepo.getById(id);
	}

	public List<Bus> getAllBus() {
		return busRepo.findAll();
	}
}
