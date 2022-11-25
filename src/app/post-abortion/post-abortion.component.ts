import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-abortion',
  templateUrl: './post-abortion.component.html',
  styleUrls: ['./post-abortion.component.css']
})
export class PostAbortionComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  public display$!: Observable<'open' | 'close'>;
  public story:boolean=false;


  ngOnInit(): void {
  }

  //  modal
  open() {
    this.modalService.open();

  }

  
  close() {
    this.modalService.close();
  }

}
