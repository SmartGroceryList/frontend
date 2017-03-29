import { Component, OnInit } from '@angular/core';

import { ListsService } from '../../_services/lists/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {
  lists = {};

  constructor(private listsService: ListsService) { }

  ngOnInit() {
    // get users from secure api end point
    this.listsService.getLists()
    .subscribe(
      resp => {
        this.lists = resp;
      }, error => {
        throw(error);
      }
    );
  }

}
