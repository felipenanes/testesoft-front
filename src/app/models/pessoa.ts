export class Pessoa {
    id?: number;
    name: string;
    sex: string;
    email: string;
    birthDate: Date;
    naturality: string;
    nationality: string;
    cpf: string;

    constructor(name, sex, email, birthDate, naturality, nationality, cpf) {
        this.name = name;
        this.sex = sex;
        this.email = email;
        this.birthDate = birthDate;
        this.naturality = naturality;
        this.nationality = nationality;
        this.cpf = cpf;
    }
}
