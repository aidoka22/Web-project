export interface Course {
  id: number;
  name: string;
  title: string;
  cost: number;
  description: string;
}

export interface AuthToken {
  token: string;
}

export interface Course {
  id: number;
  name: string;
  title: string;
  cost: number;
  description: string;
  category: number;
}

export interface Category {
  id: number;
  name: string;
}
