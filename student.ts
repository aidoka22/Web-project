export class Student { // extends User
  private id: number;
  private phone: number;
  private email: string;
  private balance: number;
  private listOfCourses : Course[] = [];
  private wishList : Course[] = [];

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
  
  public buyCourse(course: Course, sum: number) {
    if(this.balance >= sum)
    {
      this.withdraw(sum);
      this.listOfCourses.push(course);
    }
  }

  public addCourseToWishList(course: Course) {
    this.wishList.push(course);
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

  // public deleteCourseFromWishList(course: Course) {
  //   this.wishList.pop(course);
  // }
}

enum Gender {
  MALE, 
  FEMALE,
}