import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.RECIPE_API_BASE_URL,
    });
  }

  async getAllRecipes() {
    return await this.axiosInstance.get('/search.php?s=');
  }

  async getRecipesByIngredient(ingredient: string) {
    return await this.axiosInstance.get(`/filter.php?i=${ingredient}`);
  }

  async getRecipesByCountry(country: string) {
    return await this.axiosInstance.get(`/filter.php?a=${country}`);
  }

  async getRecipesByCategory(category: string) {
    return await this.axiosInstance.get(`/filter.php?c=${category}`);
  }

  async getRecipeInfo(recipeId: string) {
    return await this.axiosInstance.get(`/lookup.php?i=${recipeId}`);
  }
}
