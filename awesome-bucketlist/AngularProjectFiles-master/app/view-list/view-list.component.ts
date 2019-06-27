import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/Lists';

@Component({
  selector: 'app-view-list',
  templateUrl: './app/view-list/view-list.component.html',
 // styleUrls: ['./app/view-list/view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  constructor(private listServ:ListService) { }



   //lists propoerty which is an array of List type
   private lists: List[] = [];

  ngOnInit() {
    //Load all list on init
    this.loadList();
  }

  
  public loadList(){
    //Get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(
      response => this.lists = response);
}


 //deleteList. The deleted list is being filtered out using the .filter method
 public deleteList(list: List) {
  this.listServ.deleteList(list._id).subscribe(
    response =>    this.lists = this.lists.filter(lists => lists !== list),)
  }

  public onAddList(newList) {
      this.lists = this.lists.concat(newList);
  }

}