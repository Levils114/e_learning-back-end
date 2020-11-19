import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('lesson')
class Lesson{
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column("integer")
	duration: number;

	@Column('uuid')
	course_id: string;

	@Column('integer')
	is_completed: number;

	@Column()
	description: string;

	@Column()
	video_id: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Lesson;