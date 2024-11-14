import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablaalumnosComponent } from './components/tablaalumnos/tablaalumnos.component';
import { UpdatealumnoComponent } from './components/updatealumno/updatealumno.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'alumnos', component: TablaalumnosComponent},
	{path: 'edit/:id', component: UpdatealumnoComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
