import { Injectable } from '@angular/core';
import { UsersDatas } from '../model/element';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private eData: UsersDatas[] = [];  
    public getEmployees() {  
        const users = `[  
{   
   "age": 25,  
   "name": "   Ravi chandran",  
   "gender": "male",  
   "email": "ravi@gmail.com",  
   "dob": "11/08/1988",  
   "address": "no:842, edpally,edapally post,Ernakulam,kerla"  
},  
{   
   "age": 22,  
   "name": "Devaki s",  
   "gender": "female",  
   "email": "devaki@gmail.com",  
   "dob": "08/11/1988",  
   "address": "kurukkanmoola post,kozhikode,kerala"  
},  
{   
   "age": 30,  
   "name": "Anandu R",  
   "gender": "male",  
   "email": "anandu@gmail.com",  
   "dob": "08/11/1988",  
   "address": "parikkedathu house,Thondarnadu post,kannur,kerala"  
},  
{   
   "age": 40,  
   "name": "Jeevan P",  
   "gender": "male",  
   "email": "jeevan@gmail.com",  
   "dob": "02/02/1970",  
   "address": "thottathi house,eachamukku post,wayanad,kerala"  
},  
{   
   "age": 23,  
   "name": "Aysha sherin",  
   "gender": "female",  
   "email": "arathi@gmail.com",  
   "dob": "02/05/1980",  
   "address": "parambil house,eranadu post,Trissur,kerala"  
},  
{   
   "age": 27,  
   "name": "Manikandan",  
   "gender": "male",  
   "email": "mani@gmail.com",  
   "dob": "08/11/1988",  
   "address": "thekkadathu house,niravilpuzha post,alappuzha,kerala"  
}  
]` 
this.eData = JSON.parse(users);  
return this.eData;    
}  

  constructor() { 
    
  }
}
