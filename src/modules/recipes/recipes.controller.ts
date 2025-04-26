import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getAllRecipes() {
    return await this.recipesService.getAllRecipes();
  }

  @Get('filter/:type/:query')
  async getRecipesByFilter(
    @Param('type') type: 'ingredient' | 'country' | 'category',
    @Param('query') query: string,
  ) {
    const recipes = await this.recipesService.getRecipesByFilter(type, query);
    console.log(recipes, 'recipes');
    return recipes;
  }

  @Get(':id')
  async getRecipeInfo(@Param('id') id: string) {
    const recipe = await this.recipesService.getRecipeInfo(id);

    return recipe;
  }
}
