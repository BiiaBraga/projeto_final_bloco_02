//importações
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: "tb_produto"}) //Cria uma tabela chamada tb_produto
export class Produto{

    //atributos

    //id do produto
    @PrimaryGeneratedColumn()
    id!: number;

    //nome do produto
    @IsNotEmpty() 
    @Column({length: 100, nullable:false})
    nome!: string;

    //marca do produto
    @IsNotEmpty()
    @Column({length:1000, nullable:false})
    marca!: string;

    //preço do produto
    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2, nullable:false})
    preco!: number;

    //estoque do produto
    @IsNotEmpty()
    @Column({type: "int", nullable:false})
    estoque!: number;

    //categoria do produto
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, { 
        onDelete: "CASCADE", 
    })
    categoria!: Categoria;
}