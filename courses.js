class courses {
    title;
    instructor;
    duration;
    level;

    constructor(t, i, d, l) {
        this.title = t;
        this.instructor = i;
        this.duration = d;
        this.level = l;
    }

}

const courses1 = new courses("english", "arshad", 3, "Beginner");
const courses2 = new courses("java", "mugni", 2, "Advanced");
const courses3 = new courses("c++", "aeraf", 3, "Intermediate,");
const courses4 = new courses("javascript", "shawoor", 4, "Beginner");

let allCourses = [];
allCourses.push(courses1, courses2, courses3, courses4);
console.log(allCourses);
let start = allCourses.filter((course => course.level == "Beginner"));
console.log(start);
let total = allCourses.reduce((total, course) => total + course.duration, 0);
console.log(`${total}hrs`);
