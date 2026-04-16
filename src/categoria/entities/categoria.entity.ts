//importações
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

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

    //produtos da categoria
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto!: Produto[];
}