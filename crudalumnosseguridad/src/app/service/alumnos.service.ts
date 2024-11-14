import { Injectable } from '@angular/core';
import axios from 'axios';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() {}

  getToken(login: Login): Observable<any> {
	let request = "api/auth/login";
	let url = environment.urlApiAlumnos + request
	return new Observable(observer => {
		axios.post(url, login).then(response => {
			observer.next(response.data);
			observer.complete();

		})
	})
  }
  getAlumnos(): Observable<any> {
	let tokken = environment.tokken;
	let request = "api/alumnos";
	let url = environment.urlApiAlumnos + request;
	return new Observable(observer => {
		axios.get(url, {
			headers: {
				'Authorization': "Bearer " + tokken
			}
		}).then(response => {
			observer.next(response.data);
			observer.complete();
		})
	})
  }
  updateAlumnos(alumno: Alumno): Observable<any> {
	let tokken = environment.tokken;
	let request = "api/alumnos/updatealumno";
	let url = environment.urlApiAlumnos + request;
	return 	new Observable(observer => {
		axios.put(url, alumno, {
			headers: {
				'Authorization': "Bearer " + tokken
			}
		}).then(response => {
			observer.next(response.data);
			observer.complete();
		})
	})
  }
  findAlumno(id: string): Observable<any> {
	let tokken = environment.tokken;
	let request = "api/alumnos/findalumno/" + id;
	let url = environment.urlApiAlumnos + request;
	return new Observable(observer => {
		axios.get(url, {
			headers: {
				'Authorization': "Bearer " + tokken
			}
		}).then(response => {
			observer.next(response.data);
			observer.complete();
		})
	})
  }
}
