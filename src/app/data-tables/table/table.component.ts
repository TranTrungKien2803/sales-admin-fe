import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  url: string[] = [
    "assets/static/template_admin/datatables/jquery.dataTables.min.js",
    "assets/static/template_admin/datatables-bs4/js/dataTables.bootstrap4.min.js",
    "assets/static/template_admin/datatables-responsive/js/dataTables.responsive.min.js",
    "assets/static/template_admin/datatables-responsive/js/responsive.bootstrap4.min.js",
    "assets/static/template_admin/datatables-buttons/js/dataTables.buttons.min.js",
    "assets/static/template_admin/datatables-buttons/js/buttons.bootstrap4.min.js",
    "assets/static/template_admin/jszip/jszip.min.js",
    "assets/static/template_admin/pdfmake/pdfmake.min.js",
    "assets/static/template_admin/pdfmake/vfs_fonts.js",
    "assets/static/template_admin/datatables-buttons/js/buttons.html5.min.js",
    "assets/static/template_admin/datatables-buttons/js/buttons.print.min.js",
    "assets/static/template_admin/datatables-buttons/js/buttons.colVis.min.js",
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.loadScript()
  }

  loadScript(): void {
    for (let i = 0; i < this.url.length; i++) {
      let node = document.createElement('script');
      node.src = this.url[i];
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
