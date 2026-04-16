//importações
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class CategoriaService { //classe de serviço
  
    //construtor
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ){ }

    // 1. metódo para encontrar todas as categorias
    async findAll(): Promise<Categoria[]>{
        return await this.categoriaRepository.find({
            relations: {
                produto: true
            }
        }); 
    }

    // 2. metódo para encontrar uma categoria pelo seu Id
    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
            relations: {
                produto: true
            }
        });

        //verifica se a categoria existe, caso contrário, lança uma exceção
        if (!categoria)
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
 
        return categoria;
    }

    // 3. metódo para encontrar as categorias pelo nome
    async findAllByNome(name: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                nome: ILike(`%${name}%`)
            },
            relations: {
                produto: true
            }
        });
    }

    // 4. método que cadastra categoria no banco de dados
    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    // 5. método que atualiza uma categoria
    async update(categoria: Categoria): Promise<Categoria> {   
        let buscaCategoria: Categoria = await this.findById(categoria.id);
        if (!buscaCategoria || !categoria.id)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
        
        return await this.categoriaRepository.save(categoria);
    }

    // 6. método que deleta uma categoria
    async delete(id:number):Promise <DeleteResult>{
        await this.findById(id);
        return await this.categoriaRepository.delete(id);
    }
}