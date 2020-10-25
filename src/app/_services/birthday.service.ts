import { Injectable } from '@angular/core';
import { Birthday } from '../_models/birthday';

@Injectable()
export class BirthdayService {

    public birthdays: Birthday[] = [];
    constructor() { }
  
    getAllBirthdays(): Birthday[] {

        if(localStorage.getItem('birthdayData') !== null){ 
            this.birthdays = JSON.parse(localStorage.getItem('birthdayData'));
            console.log('Second');
        } else {
            var birthdayArrayData = [
                {
                    id: 1,
                    firstName: 'Mark',
                    lastName: 'Otto',
                    dob: '10-10-2000',
                    relation: 'relative'
                },
                {                    
                    id: 2,
                    firstName: 'Anoop',
                    lastName: 'Nadesan',
                    dob: '10-10-1984',
                    relation: 'relative'
                }
            ];
            localStorage.setItem('birthdayData', JSON.stringify(birthdayArrayData));
            this.birthdays = JSON.parse(localStorage.getItem('birthdayData'));
            console.log('First');
        }       
        return this.birthdays;
    }
    
    getBirthdayById(id: number): Birthday {
        var birthdayArray = JSON.parse(localStorage.getItem('birthdayData'));       
        console.log(birthdayArray);
        return birthdayArray
          .filter(birthday => birthday.id === id)
          .pop();
    }
  
    updateBirthdayById(birthday): Birthday {
        if (birthday.id === 0) {                    
            var birthdayArray = JSON.parse(localStorage.getItem('birthdayData'));
            var birthdayid = birthdayArray.length;
                birthday.id = ++birthdayid;
                birthdayArray.push(birthday);
            localStorage.setItem('birthdayData', JSON.stringify(birthdayArray));
        } else {
            var birthdaySaveArray = JSON.parse(localStorage.getItem('birthdayData'));
            for (var i in birthdaySaveArray) {
                if (birthdaySaveArray[i].id === birthday.id) {
                    birthdaySaveArray[i] = birthday;
                    localStorage.setItem('birthdayData', JSON.stringify(birthdaySaveArray));
                }
            }
        }
        return birthday;
    }
    
    deleteBirthdayDetail(id) {
       var birthdayArray = JSON.parse(localStorage.getItem('birthdayData'));
        for (var i in birthdayArray) {
            if (birthdayArray[i].id === id) {
                birthdayArray.splice(i, 1);
                localStorage.setItem('birthdayData', JSON.stringify(birthdayArray));  
            }
        }    
    };    
}
