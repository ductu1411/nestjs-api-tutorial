import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Global để public PrismaService để tránh phải import mỗi khi sử dụng ở module khác
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
