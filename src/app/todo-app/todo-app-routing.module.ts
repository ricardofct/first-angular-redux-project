import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAppModule } from './todo-app.module';

const routes: Routes = [{
  path: '',
  component: TodoAppModule
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
