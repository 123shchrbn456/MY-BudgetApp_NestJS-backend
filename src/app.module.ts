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
import { MyDemoModule } from './my-demo/my-demo.module'

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
				ssl: true,
				entities: [__dirname + '/**/*.entity{.js, .ts}'],
			}),
			// Connection to local database
			// useFactory: (configService: ConfigService) => ({
			// 	type: 'postgres',
			// 	host: configService.get('DB_HOST'),
			// 	port: configService.get('DB_PORT'),
			// 	username: configService.get('DB_USERNAME'),
			// 	password: configService.get('DB_PASSWORD'),
			// 	database: configService.get('DB_NAME'),
			// 	synchronize: true,
			// 	entities: [__dirname + '/**/*.entity{.js, .ts}'],
			// }),
			inject: [ConfigService],
		}),
		MyDemoModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
