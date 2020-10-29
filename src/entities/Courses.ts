import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import Lesson from './Lesson';

@Entity('courses')
class Courses{
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('varchar')
	name: string;

	@Column('varchar')
	image: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Courses;