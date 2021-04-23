export interface AuthToken {
  token: string;
}

export interface Course {
  id: number;
  // author: string;
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

export interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  category: string;
}
