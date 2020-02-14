export class DoctorInfo {
  constructor(doctor) {
    this.doctor = doctor;
    this.name = name;
    this.practice = practice;
    this.address = address;
    this.phone = phone;
    this.acceptsNew = acceptsNew;
  }

  acceptingNew() {
    if (this.doctor.practices[0].accepts_new_patients) {
      this.acceptsNew = "This doctor is accepting new patients!";
    } else {
      this.acceptsNew = "This doctor is NOT accepting new patients";
    }
  }
}