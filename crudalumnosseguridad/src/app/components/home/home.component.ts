import { Component, ElementRef } from '@angular/core';

import { Login } from '../../models/login';
import { ViewChild } from '@angular/core';
import { AlumnosService } from '../../service/alumnos.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	@ViewChild("cajauser") cajaUsuario!: ElementRef;
	@ViewChild("cajapass") cajaPass!: ElementRef;
	public login!: Login
	constructor(
		private _service: AlumnosService,
	){}
	public getToken(): void {
		let user = this.cajaUsuario.nativeElement.value;
		let pass = this.cajaPass.nativeElement.value;
		let login = new Login(user, pass);
		this._service.getToken(login).subscribe(response => {
			environment.tokken = response.response;
			console.log(response.response);
		})
	}
}
