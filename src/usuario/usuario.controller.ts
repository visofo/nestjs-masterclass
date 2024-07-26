import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private repo: UsuarioRepository) { }

  @Post()
  async criar(@Body() usuario: Usuario) {
    const newUsuario = await this.repo.create(usuario)
    return newUsuario;
  }

  @Get()
  async getAll() {
    const usuarios = await this.repo.findAll();
    return usuarios;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const usuarios = await this.repo.findOne(+id);
    return usuarios;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const usuarios = await this.repo.delete(+id);
    return usuarios;
  }



  @Patch(':id')
  async udpdate(@Param('id') id: string, @Body() usaurio: Usuario) {
    const upUsuario = await this.repo.update({ ...usaurio, id: +id });
    return upUsuario;
  }
}
