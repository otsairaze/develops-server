import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApiService {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.RECIPE_API_BASE_URL,
    });
  }

  async get(endpoint: string) {
    try {
      const response = await this.axiosInstance.get(endpoint);

      return response.data;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ошибка при запросе данных из внешнего API',
      );
    }
  }
}
