import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  constructor(private _auth:AuthService, private act:ActivatedRoute){}

id:any;
author:any

ngOnInit(): void {
  this.id=this.act.snapshot.paramMap.get('id')

  this._auth.getbyid(this.id)
  .subscribe(
    res=>{
      this.author=res
    },
    err=>{
      console.log(err)
    }
  )


}
}
