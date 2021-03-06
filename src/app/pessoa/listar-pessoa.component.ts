import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  reloadData() {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.lista().subscribe(
      data => {
        this.pessoas = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  updateEmployee(id : number): void {
    this.router.navigate([`detalhe/${id}`]);  
  }

  deletarPessoa(id: number): void {
    this.pessoaService.delete(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
        this.toastr.success("Pessoa deletada com Sucesso!")
      },
      error => console.log(error));
  }

}
