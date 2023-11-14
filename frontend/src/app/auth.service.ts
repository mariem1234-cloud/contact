import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
   url='http://127.0.0.1:3000/author/'


  create(author:any){
    return this.http.post(this.url+'ajout', author)
  }

  getAll(){
    return this.http.get(this.url+'all')
  }

  getbyid(id:any){
    return this.http.get(this.url+'getbyid/' + id)
  }

  delete(id:any){
    return this.http.delete(this.url+'delete/' +id)
  }

  update(id:any, author:any){
    return this.http.put(this.url+'update/'+ id, author)
  }

}

