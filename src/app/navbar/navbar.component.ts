import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


private title = "Github Profile";

private item1 = "Page 1";
private item2 = "Page 2";

private item3 = "Page 3";
private item4 = "Page 4";


  constructor() { }

  ngOnInit() {
  }

}
