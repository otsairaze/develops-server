import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';

@Injectable()
export class RecipesService {
  constructor(private readonly apiService: ApiService) {}

  async getAllRecipes() {
    return await this.apiService.getAllRecipes();
  }

  async getRecipesByIngredient(ingredient: string) {
    return await this.apiService.getRecipesByIngredient(ingredient);
  }

  async getRecipesByCountry(country: string) {
    return await this.apiService.getRecipesByCountry(country);
  }

  async getRecipesByCategory(category: string) {
    return await this.apiService.getRecipesByCategory(category);
  }

  async getRecipeInfo(recipeId: string) {
    return await this.apiService.getRecipeInfo(recipeId);
  }
}
