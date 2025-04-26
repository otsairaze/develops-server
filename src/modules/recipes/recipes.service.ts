import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ApiService } from '../api/api.service';

@Injectable()
export class RecipesService {
  constructor(private readonly apiService: ApiService) {}

  async getAllRecipes() {
    try {
      const data = await this.apiService.get('/search.php?s=');
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ошибка при получении всех рецептов',
      );
    }
  }

  async getRecipesByFilter(type: string, query: string) {
    const filterParams: { [key: string]: string } = {
      ingredient: `i=${query}`,
      country: `a=${query}`,
      category: `c=${query}`,
    };

    const filterQuery = filterParams[type];

    if (!filterQuery) {
      throw new Error('Неверный тип фильтрации');
    }

    try {
      return await this.apiService.get(`/filter.php?${filterQuery}`);
    } catch (error) {
      throw new InternalServerErrorException(
        `Ошибка при получении рецептов по фильтру ${type}: ${query}`,
      );
    }
  }

  async getRecipeInfo(recipeId: string) {
    try {
      return await this.apiService.get(`/lookup.php?i=${recipeId}`);
    } catch (error) {
      throw new InternalServerErrorException(
        `Ошибка при получении информации о рецепте с ID ${recipeId}`,
      );
    }
  }
}
