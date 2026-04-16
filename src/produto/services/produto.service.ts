//importações
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ProdutoService { //classe de serviço
  
    //construtor
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ){ }

    // 1. metódo para encontrar todos os produtos
    async findAll(): Promise<Produto[]>{
        return await this.produtoRepository.find(); 
    }

    // 2. metódo para encontrar um produto pelo seu Id
    async findById(id: number): Promise<Produto> {
        const produto = await this.produtoRepository.findOne({
            where: {
                id
            },
        });

        //verifica se o produto existe, caso contrário, lança uma exceção
        if (!produto)
            throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
 
        return produto;
    }

    // 3. metódo para encontrar os produtos pelo nome
    async findAllByNome(name: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${name}%`)
            }
        });
    }

    // 4. método que cadastra produto no banco de dados
    async create(produto: Produto): Promise<Produto> {
        return await this.produtoRepository.save(produto);
    }

    // 5. método que atualiza um produto
    async update(produto: Produto): Promise<Produto> {   
        let buscaProduto: Produto = await this.findById(produto.id);
        if (!buscaProduto || !produto.id)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
        
        return await this.produtoRepository.save(produto);
    }

    // 6. método que deleta um produto
    async delete(id:number):Promise <DeleteResult>{
        await this.findById(id);
        return await this.produtoRepository.delete(id);
    }
}