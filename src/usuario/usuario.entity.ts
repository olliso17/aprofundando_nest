import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico";

export class Usuario{
    id:number;

    @IsNomeDeUsuarioUnico({
        message:"nomeDeUsuario precisa ser único"
    })
    @IsNotEmpty({
        message:"Nome de Usuário é obrigatório"
    })
    @IsString()
    nomeDeUsuario: string;

    @IsEmail()
    email: string;

    @IsNotEmpty({
        message:"Senha é obrigatória"
    })
    senha: string;

    @IsNotEmpty({
        message:"Nome completo é obrigatório"
    })
    nomeCompleto: string;

    dataDeEntrada:Date;

}