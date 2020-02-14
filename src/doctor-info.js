export class DoctorInfo {
  constructor(doctor) {
    this.doctor = doctor;
    this.name = (doctor.profile.first_name + " " + doctor.profile.last_name).toUpperCase();
    this.bio = "Bio: " + doctor.profile.bio;
    this.practice = "Practices:" + doctor.practices[0].name;
    this.address = "Address: " + doctor.practices[0].visit_address.street + ", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state;
    this.phone = doctor.practices[0].phones[0].number;
    // this.website = website;
  }
}