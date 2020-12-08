import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Birthday } from '../models/birthday';

@Injectable({
    providedIn: 'root'
 })
export class BirthdayService {

    public apiBaseBirthdayUrl = 'http://localhost/gitpro/angular-crud-jwt/src/public/birthday';
    public birthdays: Birthday[] = [];
    constructor(private http:HttpClient) { }
  
    getAllBirthdays() {
       return this.http.get(`${this.apiBaseBirthdayUrl}`);            
    }
    
    getBirthdayById(id: number): any {
        return this.http.get(`${this.apiBaseBirthdayUrl}?id=${id}`);
       }
  
    updateBirthdayById(birthday) {
        let serializedBirthdayData =  JSON.stringify(birthday);
        if (birthday.id === 0) {     
            return this.http.post(`${this.apiBaseBirthdayUrl}`, serializedBirthdayData);
        } else {
            return this.http.put(`${this.apiBaseBirthdayUrl}` , serializedBirthdayData);
        }
    }
    
    deleteBirthdayDetail(id) {
        return this.http.delete(`${this.apiBaseBirthdayUrl}?id=${id}`);
    }    
}
