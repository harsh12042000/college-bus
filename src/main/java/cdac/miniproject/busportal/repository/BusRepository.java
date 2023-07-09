package cdac.miniproject.busportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cdac.miniproject.busportal.entity.Bus;

public interface BusRepository extends JpaRepository<Bus, Integer>{

}
