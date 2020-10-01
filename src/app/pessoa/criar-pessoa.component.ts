import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

  submitted = false;
  
  model = new Pessoa('','','','','','','');
  criarPessoa: FormGroup;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
      this.criarPessoa = new FormGroup({
        name: new FormControl(this.model.name, [
          Validators.required,
          Validators.minLength(4),
        ]),
        email: new FormControl(this.model.email, [
          Validators.email
        ]),
        birthDate: new FormControl(this.model.birthDate, [
          Validators.required
        ]),
        cpf: new FormControl(this.model.cpf, [
          Validators.required
        ]),
      });
  }

  onSubmit() { 
    this.submitted = true; 
    this.http.post('http://localhost:8080/api/person', this.model).subscribe(
      (response) => {
        this.router.navigate(['']);         
        this.toastr.success("Pessoa Inserida com Sucesso!");
      },
      (error) => console.log(error)
    )
  }

  newPessoa() {
    this.model = new Pessoa('', '', '', '', '', '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
