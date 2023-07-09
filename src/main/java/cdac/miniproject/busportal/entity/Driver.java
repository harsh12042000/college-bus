package cdac.miniproject.busportal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Driver {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int driver_id;
	private String driverName;
	private long driverNumber;
	private String license;
	private int driverAge;
	
	@OneToOne
	@JoinColumn(name = "bus_id")
	private Bus bus;

	public Driver() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Driver(int driver_id, String driverName, long driverNumber, String license, int driverAge, Bus bus) {
		super();
		this.driver_id = driver_id;
		this.driverName = driverName;
		this.driverNumber = driverNumber;
		this.license = license;
		this.driverAge = driverAge;
		this.bus = bus;
	}

	public int getDriver_id() {
		return driver_id;
	}

	public void setDriver_id(int driver_id) {
		this.driver_id = driver_id;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public long getDriverNumber() {
		return driverNumber;
	}

	public void setDriverNumber(long driverNumber) {
		this.driverNumber = driverNumber;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public int getDriverAge() {
		return driverAge;
	}

	public void setDriverAge(int driverAge) {
		this.driverAge = driverAge;
	}

	public Bus getBus() {
		return bus;
	}

	public void setBus(Bus bus) {
		this.bus = bus;
	}
	
	
}
