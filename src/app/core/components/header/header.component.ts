import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowHideFlag: MatDrawerMode = 'over'
  constructor() { }

  ngOnInit(): void {
  }

}
