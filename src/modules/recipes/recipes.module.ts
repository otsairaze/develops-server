import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { ApiService } from '../api/api.service';

@Module({
  providers: [RecipesService, ApiService],
  controllers: [RecipesController],
})
export class RecipesModule {}
