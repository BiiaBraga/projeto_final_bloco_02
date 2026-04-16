//importações
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categoria"}) //Cria uma tabela chamada tb_categoria
export class Categoria{

    //atributos

    //id da categoria
    @PrimaryGeneratedColumn()
    id!: number;

    //nome da categoria
    @IsNotEmpty() 
    @Column({length: 100, nullable:false})
    nome!: string;

    //descrição da categoria
    @IsNotEmpty()
    @Column({length:1000, nullable:false})
    descricao!: string;
}