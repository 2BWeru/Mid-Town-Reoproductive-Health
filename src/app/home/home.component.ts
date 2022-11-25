import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Formcontact!:FormGroup;

  constructor(private builder:FormBuilder,private contactService:ContactService) { }

  ngOnInit(): void {
    this.Formcontact = this.builder.group({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      tel:new FormControl('',[Validators.required]),
      surname:new FormControl('',[Validators.required]),
      message:new FormControl('',[Validators.required]),
      

    })
  }

FormSubmit=false;

  onSubmit(){
    if(this.Formcontact.valid){
      this.FormSubmit = true
    }else{
      alert("Message sent")
    }
    
  }

}
