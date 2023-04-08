import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private readonly logger = new Logger(AxiosAdapter.name);
  constructor(private readonly httpService: HttpService) {}
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<T>(url).pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new Error('An AxiosError happened! - Check Logs.');
          }),
        ),
      );
      return data;
    } catch (error) {
      throw new Error('An error happened! - Check Logs.');
    }
  }
}
