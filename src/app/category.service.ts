import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './models';
import {Course} from './models'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}/api/categories/${id}`);
  }
}
