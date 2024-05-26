import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module'
import { AuthModule } from './auth/auth.module'
import { TransactionModule } from './transaction/transaction.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MyTryModule } from './my-try/my-try.module'

@Module({
	imports: [
		UserModule,
		CategoryModule,
		AuthModule,
		TransactionModule,
		MyTryModule,
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('POSTGRES_HOST'),
				port: configService.get('DB_PORT'),
				username: configService.get('POSTGRES_USER'),
				password: configService.get('POSTGRES_PASSWORD'),
				database: configService.get('POSTGRES_DATABASE'),
				synchronize: false,
				entities: [__dirname + '/**/*.entity{.js, .ts}'],
			}),
			inject: [ConfigService],
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
