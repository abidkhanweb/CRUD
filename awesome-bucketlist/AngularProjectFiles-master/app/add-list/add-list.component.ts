import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/Lists';
import { ListService } from '../services/list.service';

@Component({
    selector: 'app-add-list',
    templateUrl: './app/add-list/add-list.component.html',
   // styleUrls: ['./add-list.component.scss']
  })
  export class AddListComponent implements OnInit {
  
    private newList :List;
  
    @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  
  
    constructor(private listServ: ListService) { }
  
    ngOnInit() {
      this.newList = {
          title: '',
          category:'',
          description:'',
          _id:''
  
      }
    }
  
    
  
    public onSubmit() {
      console.log(this.newList.category);
      this.listServ.addList(this.newList).subscribe(
          response=> {
              console.log(response);
              if(response.success== true){
                this.addList.emit(this.newList);
              }
                  
          },
      );
  
  }
  
  }