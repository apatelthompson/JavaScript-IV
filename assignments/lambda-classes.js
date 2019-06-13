// CODE here for your Lambda Classes

class Person {
   constructor(attributes){
    this.newName = attributes.name;
    this.newAge = attributes.age;
    this.newLocation = attributes.location;
   }

  speak() {
    return `Hello my name is ${this.newName}, I am from ${this.newLocation}.`;
  }
 }
 // Parent

class Instructor extends Person{
   constructor(childAttributes){
     super(childAttributes);
     this.specialty = childAttributes.specialty;
     this.favLanguage = childAttributes.favLanguage;
     this.catchPhrase = childAttributes.catchPhrase;
   }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
    }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`
    }
  assignGrade(student) {
    student.grade += Math.round(Math.random()*20)-10;
    if (student.grade < 0) {
      student.grade = 0;
    }
    if (student.grade > 100) {
      student.grade = 100;
    }
  }

  }

class Student extends Person{
    constructor(childAttributes){
      super(childAttributes);
      this.previousBackground = childAttributes.previousBackground;
      this.className = childAttributes.className;
      this.favSubjects = childAttributes.favSubjects;
      this.grade = childAttributes.grade;
    }
  listsSubjects() {
      return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
      return `${this.newName} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
      return `${this.newName} has begun sprint challenge on ${subject}.`;
  }
  graduate(instObj) {
      while (this.grade < 70) {
        console.log(this.grade);
        instObj.assignGrade(this);
      }
      console.log(`${this.newName} may graduate!`);
  }

  }
// Child

class ProjectManager extends Instructor{
    constructor(grandchildAttributes){
      super(grandchildAttributes);
      this.gradClassName = grandchildAttributes.gradClassName;
      this.favInstructor = grandchildAttributes.favInstructor;
    }
  standUp(channel) {
      return `${this.newName} announces to @${channel}, @${channel} standup times!`;
  }
  debugsCode(student, subject) {
      return `${this.newName} debugs ${student}'s code on ${subject}`
  }
  }


//Instructors:
  const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
    });

  const julie = new Instructor({
    name: 'Julie',
    age: '33',
    location: 'Seattle',
    specialty: 'Teaching complex topics',
    favLanguage: 'JavaScript, Python, Elm',
    catchPhrase: 'Teamwork makes the dream work',
    });

  const sara = new Instructor({
    name: 'Sara',
    age: '37',
    location: 'Toronto',
    specialty: 'Speedy coder',
    favLanguage: 'Java, Rust, Go, Ruby',
    catchPhrase: 'If you know better, do better',
    });


  //Students:
  const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 84
});
    const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 40
});
    const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 96
});


//ProjectManagers
    const marguel = new ProjectManager({
      name: 'Marguel',
      age: 'Maybe 26',
      gradClassName: 'WEBPT2',
      favInstructor: 'Me?',
      location: 'California',
      specialty: 'React',
      favLanguage: 'JavaScript, Python, Elm etc.',
      catchPhrase: "Practice Flex Zombies !!!",
  });

    const brandon = new ProjectManager({
      name: 'Brandon',
      age: '34',
      gradClassName: 'WEB18',
      favInstructor: 'Professor Lambda',
      location: 'Maine',
      specialty: 'Redux',
      favLanguage: 'JavaScript, C++, Python.',
      catchPhrase: "You shall not pass!",
  });

      const mary = new ProjectManager({
      name: 'Mary',
      age: '24',
      gradClassName: 'WEB18',
      favInstructor: 'Josh Knell',
      location: 'New York',
      specialty: 'Express and Node.js',
      favLanguage: 'Javascript',
      catchPhrase: "That looks AWESOME",
  });

  console.log(dan.speak());
  console.log(julie.demo('Flexbox'));
  console.log(sara.grade('Nisa','JS-I'));
  console.log(julie.catchPhrase);

  console.log(nisa.grade);
  dan.assignGrade(nisa);
  console.log(nisa.grade);
  dan.assignGrade(nisa);
  console.log(nisa.grade);

  kevin.graduate(dan);

  console.log(isaiah.listsSubjects());
  console.log(kevin.PRAssignment('JS-II'));
  console.log(nisa.sprintChallenge('JS Fundamentals'));


  console.log(mary.standUp('general'));
  console.log(brandon.debugsCode('Isaiah', 'React'));
