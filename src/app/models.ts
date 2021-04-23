export interface Course {
    id: number;
    name: string;
    title: string;
    cost: number;
    description: string;
    category: number;
    imagepath: string;
  }

export interface Category {
  id: number;
  name: string;
  }
  
  export class Teacher { // extends User
    private id: number;
    private phone: number;
    private email: string;
    private balance: number;
    private listOfCoursesForTeacher : Course[] = [];  
    public name: string;
    public surname: string;
    public age: number;
    public gender: Gender;
  
    constructor(name: string, surname: string, age: number, gender: Gender, email: string, phone: number, id: number) {
      this.balance = 0;
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.gender = gender;
      this.phone = phone;
      this.id = id;
      this.email = email;
    }
  
    public withdraw(sum: number) {
      this.balance -= sum;
    }
  
    public increaseBalance(sum: number) {
      this.balance += sum;
    }
    
    public addCourse(course: Course, sum: number) {
      if(this.balance >= sum)
      {
        this.withdraw(sum);
        this.listOfCoursesForTeacher.push(course);
      }
    }
  
    public getCourses() {
        var i:number;
        for(i = this.balance;i>=1;i--) {
            return this.listOfCoursesForTeacher[i];
        }
    }
  
    public getId() {
      return this.id;
    }
  
    // public setId(id: number) {
    //   this.id = id;
    // }
  
    public getPhone() {
      return this.phone;
    }
  
    public setPhone(phone: number) {
      this.phone = phone;
    }
  
    public getEmail() {
      return this.email;
    }
  
     public deleteCourse(course: Course) {
          //this.listOfCoursesForTeacher.pop();
     }
  }
  
  enum Gender {
    MALE, 
    FEMALE,
  }
