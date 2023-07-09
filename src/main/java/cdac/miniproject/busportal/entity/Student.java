package cdac.miniproject.busportal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int student_id;
	private String prn;
	private String userName;
	private long contactNumber;
	private String standard;
	private String password;
	private String gender;
	private int feeStatus;
	private int checkAdmin;
	
	@ManyToOne
	@JoinColumn(name = "bus_id")
	private Bus bus;


	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public String getPrn() {
		return prn;
	}

	public void setPrn(String prn) {
		this.prn = prn;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getStandard() {
		return standard;
	}

	public void setStandard(String standard) {
		this.standard = standard;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Bus getBus() {
		return bus;
	}

	public void setBus(Bus bus) {
		this.bus = bus;
	}

	public int getFeeStatus() {
		return feeStatus;
	}

	public void setFeeStatus(int feeStatus) {
		this.feeStatus = feeStatus;
	}

	public int getCheckAdmin() {
		return checkAdmin;
	}

	public void setCheckAdmin(int checkAdmin) {
		this.checkAdmin = checkAdmin;
	}

	
}
