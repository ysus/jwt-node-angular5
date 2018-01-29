import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    messages =[];
    constructor(private http:HttpClient){}

    getMessages(){
        return this.http.get('http://localhost:3000/posts')
            .subscribe(
                (response:any)=>{
                    
                    this.messages= response;
                }
            );
    }
}