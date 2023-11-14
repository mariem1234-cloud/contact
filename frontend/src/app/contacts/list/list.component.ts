import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import 
Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

constructor(private _auth:AuthService){}


authors:any;
id:any;

  ngOnInit(): void {
    this._auth.getAll()
    .subscribe(
      res=>{
      this.authors=res
    },
    err=>{
      console.log(err)
    }
    )
    
  }

  delete(id:any){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      
      if (result.isConfirmed) {
        this._auth.delete(id)
        .subscribe(
          res=>{
            this.ngOnInit()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            
          }, 
          err=>{
            console.log(err)
          }
        )

      }
    })
    

  }

}
