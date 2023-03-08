const studentsInfo = {
    name: 'Adnan Hossain',
    roll: 934677,
    university: 'Dhaka International University',
    marks: [
        {
            math: 98,
            english: 45,
            bangla: 78
        },
        {
            math: 65,
            english: 78,
            bangla: 85
        }
    ]
}

console.log(studentsInfo.marks[3]?.math)