import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnosService } from '../../service/alumnos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-updatealumno',
  templateUrl: './updatealumno.component.html',
  styleUrl: './updatealumno.component.css'
})
export class UpdatealumnoComponent implements OnInit{
	@ViewChild("cajanombre") cajaNombre!: ElementRef;
	@ViewChild("cajaapellidos") cajaApellidos!: ElementRef;
	@ViewChild("cajaimagen") cajaImagen!: ElementRef;
	@ViewChild("cajaidcurso") cajaCurso!: ElementRef;
	@ViewChild("cajaactivo") cajaActivo!: ElementRef;
	@ViewChild("cajaid") cajaId!: ElementRef;
	public alumno!: Alumno;
	public alumnoAct!: Alumno;

	constructor(
		private service: AlumnosService,
		private _activeRoute: ActivatedRoute
	) {}
	public findAlumno(): void {
		this._activeRoute.params.subscribe((params: Params) => {
			let id = params["id"];
			this.service.findAlumno(id).subscribe(response => {
				this.alumno = response;
				console.log(response)
			})
		})
	}
	public editAlumno(): void {
		let activo = this.cajaActivo.nativeElement.value;
		let apellidos = this.cajaApellidos.nativeElement.value;
		let idAlumno = this.cajaId.nativeElement.value;
		let idCurso = this.cajaCurso.nativeElement.value;
		let imagen = this.cajaImagen.nativeElement.value;
		let nombre = this.cajaNombre.nativeElement.value;
		this.alumnoAct = new Alumno(idAlumno, nombre, apellidos, imagen,
			activo, idCurso
		)
		this.service.updateAlumnos(this.alumnoAct).subscribe(response => {
			console.log(response + "editado");

		})
	}
	ngOnInit(): void {
		this.findAlumno();
	}
}
