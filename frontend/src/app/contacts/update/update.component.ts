import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(private _auth:AuthService, private act:ActivatedRoute, private router:Router){}
id:any;
author:any;
image:any;



selectPhoto(e:any){
  this.image=e.target.files[0] }


  ngOnInit(): void {

    
this.id=this.act.snapshot.paramMap.get('id')
    
this._auth.getbyid(this.id)
.subscribe(
  (res)=>{
this.author=res;
  },
  (err)=>{
    console.log(err)
  }
)


  }

  update(){

    let fd=new FormData();
    fd.append('name', this.author.name);
    fd.append('email', this.author.email);
    fd.append('mobile', this.author.mobile);
    fd.append('company', this.author.company);
    fd.append('title', this.author.title);

    if (this.image){
      fd.append('image', this.image)
    }else{
      fd.append('image', this.author.image)
    }
    
    this._auth.update(this.id, fd)
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
