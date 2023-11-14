import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit{

  constructor(private _auth:AuthService, private router:Router){}

  ngOnInit(): void {
    
  }

  author:any={
    name:'',
    email:'',
    mobile:'',
    company:'',
    title:'',
    image:''
    

  }

  image:any;
  

  select(e:any){
    this.image=e.target.files[0]

  }

create(){
  let fd=new FormData()
  fd.append('name', this.author.name),
  fd.append('email', this.author.email),
  fd.append('mobile', this.author.mobile),
  fd.append('company', this.author.company),
  fd.append('title', this.author.title),
  fd.append('image', this.image)

  this._auth.create(fd)
  .subscribe(
    res=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/contact/admin'])
    },

    err=>{
      console.log(err)
    }

  )

}





}
