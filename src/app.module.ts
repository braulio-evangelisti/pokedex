import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pokemon'),
    PokemonModule,
    CommonModule,
  ],
})
export class AppModule {}