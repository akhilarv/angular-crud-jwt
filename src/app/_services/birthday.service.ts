import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Birthday } from '../_models/birthday';

@Injectable({
    providedIn: 'root'
 })
export class BirthdayService {

    public apiUrl = 'http://localhost/gitpro/angular-crud-jwt/src/public';
    public birthdays: Birthday[] = [];
    constructor(private http:HttpClient) { }
  
    getAllBirthdays() {
       return this.http.get('http://localhost/gitpro/angular-crud-jwt/src/public/birthday');            
    }
    
    getBirthdayById(id: number): any {
        return this.http.get('http://localhost/gitpro/angular-crud-jwt/src/public/birthday?id='+id);
       }
  
    updateBirthdayById(birthday) {
        let serData =  JSON.stringify(birthday);
        if (birthday.id === 0) {     
            return this.http.post('http://127.0.0.1/gitpro/angular-crud-jwt/src/public/birthday', serData);
        } else {
            return this.http.put('http://127.0.0.1/gitpro/angular-crud-jwt/src/public/birthday' , serData);
        }
    }
    
    deleteBirthdayDetail(id) {
        console.log(id);
        return this.http.delete('http://127.0.0.1/gitpro/angular-crud-jwt/src/public/birthday?id='+id);
    }    
}
