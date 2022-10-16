import { Module } from '@nestjs/common';
import { UsuarioModulo } from './usuario/usuario.module';


@Module({
  imports: [UsuarioModulo],
  controllers: [ ],
  providers: [],
})
export class AppModule {}
