import { Controller, Get, Query, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  getAllRecipes() {
    return this.recipesService.getAllRecipes();
  }

  @Get('ingredient/:ingredient')
  getRecipesByIngredient(@Param('ingredient') ingredient: string) {
    return this.recipesService.getRecipesByIngredient(ingredient);
  }

  @Get('country/:country')
  getRecipesByCountry(@Param('country') country: string) {
    return this.recipesService.getRecipesByCountry(country);
  }

  @Get('category/:category')
  getRecipesByCategory(@Param('category') category: string) {
    return this.recipesService.getRecipesByCategory(category);
  }

  @Get(':id')
  getRecipeInfo(@Param('id') id: string) {
    return this.recipesService.getRecipeInfo(id);
  }
}
