import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje: any;
  @Output() cilckPost = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

   onClick(){
    this.cilckPost.emit(this.mensaje.id)
   }
}
