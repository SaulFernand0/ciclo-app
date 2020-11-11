import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciclo } from '../models/ciclo';

@Injectable({
  providedIn: 'root'
})

export class CicloService {
  private httpHeaders = new HttpHeaders({'Conten-Type': 'application/json'});
  private cicloUrl: string = 'http://localhost:9090/ciclos';//endpoint

  constructor(private http: HttpClient) { }

  getCiclos():Observable<Ciclo[]>{
    return this.http.get<Ciclo[]>(this.cicloUrl+'/all');
  }
  getCiclo(id:number):Observable<Object> {
    return this.http.get(`${this.cicloUrl}/${id}`);
  }
  addCiclo(ciclo:Ciclo): Observable<number>{
    return this.http.post<number>(this.cicloUrl+"/add", ciclo, {headers:this.httpHeaders});
  }

  deleteCiclo(id:number): Observable<number>{
    return this.http.delete<number>(this.cicloUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updateCiclo(ciclo: Ciclo):Observable<number>{
    return this.http.put<number>(`${this.cicloUrl}/update/${ciclo.id_ciclo}`, ciclo,{headers:this.httpHeaders});
  }

}
