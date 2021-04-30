import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Course} from './models';
@Injectable({
  providedIn: 'root'
})
export class WishListService {
  addToWishList(wish: any) {
    throw new Error('Method not implemented.');
  }
  BASE_URL =  'http://127.0.0.1:8000';  
  httpHeaders=new HttpHeaders({'Content-Type': 'application/json'});
  wishs:Course[]=[];
  constructor(private http: HttpClient) { 
  }
  addToList(course:Course): Observable<any>{
    let id=course.id;
    const body={name: course.name, title: course.title, description: course.description, cost: course.cost, category:  course.category, author:  course.author, imagepath:  course.imagepath}
    console.log(course.name);
    return this.http.post<any>(`${this.BASE_URL}/api/courses/${id}/wishlist/4`, body,{headers:this.httpHeaders});
    
  }

  deletefromWishlist(course:Course): Observable<any>{
    return this.http.delete<Course[]>(`${this.BASE_URL}/api/courses/${course.id}/wishlist/4`);
  }
  getwishs(): Observable<any>{
    return this.http.get<Course[]>( `${this.BASE_URL}/api/wishlist/4`);
  }

  clearWishList(): Observable<any>{
    return this.http.delete<Course[]>(`${this.BASE_URL}/api/wishlist/4/clear`);
  }
 
}