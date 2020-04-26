import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {id: 1, name: 'Angualr'},
    {id: 2, name: 'Node'},
    {id: 3, name: 'MongoDB'},
    {id: 4, name: 'Ruby'},
    {id: 5, name: 'Bootstrap'},
  ];

  constructor() {  }

  onSelect(department){
    // this.router.navigate();
  }
  ngOnInit(): void {

  }

}
