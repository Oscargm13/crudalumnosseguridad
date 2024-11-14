import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnosService } from '../../service/alumnos.service';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tablaalumnos',
	templateUrl: './tablaalumnos.component.html',
	styleUrl: './tablaalumnos.component.css'
})
export class TablaalumnosComponent implements OnInit {
	public alumnos!: Array<Alumno>;
	public idAlumno!: number;
	constructor(
		private service: AlumnosService,
		private router: Router
	) { }
	public getAlumnos(): void {
		if (environment.tokken) {
			this.service.getAlumnos().subscribe(response => {
				this.alumnos = response;
				console.log(response);
			})
		}else {
			this.router.navigate(["/"])
		}
	}
	ngOnInit(): void {
		this.getAlumnos();
	}
}
