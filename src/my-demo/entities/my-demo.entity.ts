import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class MyDemo {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	title: string
	@CreateDateColumn()
	created_at: Date
}
