import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('lesson')
class Lesson{
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	duration: number;

	@Column('uuid')
	course_id: string;

	@Column('integer')
	description: string;

	@Column()
	video_id: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Lesson;