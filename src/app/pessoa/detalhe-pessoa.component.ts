import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.component.html',
  styleUrls: ['./detalhe-pessoa.component.css']
})
export class DetalhePessoaComponent implements OnInit {

  submitted = false;

  model = new Pessoa('','','','','','','');
  id: number;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private toastr: ToastrService, 
    private pessoaService: PessoaService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pessoaService.detail(this.id).subscribe(
      (response) => {
        console.log(response);
        this.model.name = response.name;
        this.model.sex = response.sex;
        this.model.birthDate = response.birthDate;
        this.model.email = response.email;
        this.model.cpf = response.cpf;
        this.model.nationality = response.nationality;
        this.model.naturality = response.naturality;
      }, 
      (error) => {
        console.log(error)
      }
    );
  }

  onSubmit() { 
    this.submitted = true; 
    this.http.put(`http://localhost:8080/api/person/change/${this.id}`, this.model).subscribe(
      (response) => {     
        this.router.navigate(['']);       
        this.toastr.info("Edição concluída com Sucesso!");
      },
      (error) => console.log(error)
    )
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
