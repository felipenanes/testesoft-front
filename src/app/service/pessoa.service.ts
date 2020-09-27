import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  pessoaURL = 'http://localhost:8080/api/person/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.pessoaURL);
  }

  public detail(id: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(this.pessoaURL + `change/${id}`);
  }

  public save(pessoa: Pessoa): Observable<any> {
    return this.httpClient.post<any>(this.pessoaURL, Pessoa);
  }

  public update(pessoa: Pessoa): Observable<any> {
    return this.httpClient.put<any>(this.pessoaURL, Pessoa);
  }


  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.pessoaURL + `${id}`);
  }

}
