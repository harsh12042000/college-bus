package cdac.miniproject.busportal.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Bus {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bus_id;
	private String vehicleNumber;
	private String source;
	private float fees;
	private int seatCapacity;
//	private Route route;
	
//	@OneToOne
//	private Driver driver;
	
//	@OneToMany(mappedBy = "bus", cascade = CascadeType.ALL)
//	private List<Student> students;
	
	public Bus() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Bus(int bus_id, String vehicleNumber, String source, String destination, float fees) {
		super();
		this.bus_id = bus_id;
		this.vehicleNumber = vehicleNumber;
		this.source = source;
		this.fees = fees;
	}

	public int getBus_id() {
		return bus_id;
	}

	public void setBus_id(int bus_id) {
		this.bus_id = bus_id;
	}

	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public float getFees() {
		return fees;
	}

	public void setFees(float fees) {
		this.fees = fees;
	}

	public int getSeatCapacity() {
		return seatCapacity;
	}

	public void setSeatCapacity(int seatCapacity) {
		this.seatCapacity = seatCapacity;
	}

//	public Driver getDriver() {
//		return driver;
//	}
//
//	public void setDriver(Driver driver) {
//		this.driver = driver;
//	}

//	public List<Student> getStudents() {
//		return students;
//	}
//
//	public void setStudents(List<Student> students) {
//		this.students = students;
//	}

}
