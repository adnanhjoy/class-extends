class Instructor {
    name;
    university = 'Dhaka International University'
    batch = 'E-95'
    roll;
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }

    getLocation(name, location) {
        console.log(`${name} location is ${location}`);
    }
}

const studentsName = new Instructor('Adnan', 934677);
console.log(studentsName);
studentsName.getLocation('Adnan', 'Mirzapur');