class University {
    name;
    university;
    department
    location;
    constructor(name, university, department, location) {
        this.name = name;
        this.university = university;
        this.department = department;
        this.location = location;
    }
    getFeedback() {
        console.log(`Congratulations ${this.name}`)
    }
}

class Students extends University {
    roll;
    batch;
    constructor(name, university, department, location, roll, batch) {
        super(name, university, department, location);
        this.roll = roll;
        this.batch = batch;
    }
};

class Instructor extends University {
    subject;
    designation;
    constructor(name, university, department, location, subject, designation) {
        super(name, university, department, location);
        this.subject = subject;
        this.designation = designation;
    }
}

class InformationCenter extends University {
    time;
    constructor(name, university, department, location, time) {
        super(name, university, department, location);
        this.time = time;
    }
}

const studensInfo = new Students('Adnan Hossain', 'Dhaka International University', 'CSE', 'Badda,Satarkul', 934677, 'E-95');
const innstructorInfo = new Instructor('Rahim Sir', 'Dhaka International University', 'CSE', 'Badda,Satarkul', 'MAth', 'Math Instructor');

studensInfo.getFeedback();
console.log(studensInfo);
innstructorInfo.getFeedback();
console.log(innstructorInfo);