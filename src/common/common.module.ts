import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
  imports: [HttpModule],
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
})
export class CommonModule {}
