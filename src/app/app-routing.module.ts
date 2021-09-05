import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{
  path: 'dash-board',
  loadChildren: () => import('./dash-board/dash-board.module').then(module => module.DashBoardModule)
},
  {
    path: 'data-table',
    loadChildren: () => import('./data-tables/data-tables.module').then(module => module.DataTablesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
