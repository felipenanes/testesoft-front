import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

  submitted = false;
  sexOptions = [];
  model = new Pessoa('','','','','','','');
  criarPessoa: FormGroup;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
      this.sexOptions = ['Male', 'Female', 'Undefined'];
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
          Validators.required,
          this.isValidCpf
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

  /**
    * Valida se o CPF é valido. Deve-se ser informado o cpf sem máscara.
   */
  isValidCpf(control: AbstractControl): {[key: string]: any} | null {
      const cpf = control.value;
      if (cpf) {
        let numbers, digits, sum, i, result, equalDigits;
        equalDigits = 1;
        if (cpf.length < 11) {
        return null;
        }

        for (i = 0; i < cpf.length - 1; i++) {
          if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
            equalDigits = 0;
            break;
          }
        }

        if (control.value && control.value.length < 11) {
          return { 'cpfInvalid': true };
        }
        
        if (!equalDigits) {
          numbers = cpf.substring(0, 9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(0))) {
            return { 'cpfNotValid': true };
          }
          numbers = cpf.substring(0, 10);
          sum = 0;

          for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(1))) {
            return { 'cpfNotValid': true };
          }
          return null;
        } else {
          return { 'cpfNotValid': true };
        }
    }
    return null;
  }
}
