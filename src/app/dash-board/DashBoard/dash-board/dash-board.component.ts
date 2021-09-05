import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.loadScript()
  }

  loadScript(): void {
    let node = document.createElement('script');
    node.src = `assets/static/template_admin/dist/js/pages/dashboard3.js`;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
