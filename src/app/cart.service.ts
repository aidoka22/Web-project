import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  BASE_URL =  'http://127.0.0.1:8000';  
  httpHeaders=new HttpHeaders({'Content-Type': 'application/json'});
  items:Course[] = [];
  constructor(private http: HttpClient) { 
  }
  addToCart(course:Course): Observable<any>{
    let id=course.id;
    const body={name: course.name, title: course.title, description: course.description, cost: course.cost, category:  course.category, author:  course.author, imagepath:  course.imagepath}
    return this.http.post<any>(`${this.BASE_URL}/api/courses/${id}/cart/4`, body,{headers:this.httpHeaders});
  }

  getItems(): Observable<any>{
    return this.http.get<Course[]>( `${this.BASE_URL}/api/cart/4`);
  }
  
  deletefromCart(course): Observable<any>{
    return this.http.delete<Course[]>(`${this.BASE_URL}/api/courses/${course.id}/cart/4`);
  }

  clearCart(): Observable<any>{
    return this.http.delete<Course[]>(`${this.BASE_URL}/api/cart/4/clear`);
  }

}
