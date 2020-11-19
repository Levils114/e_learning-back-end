import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Lesson1603998249698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
    	await queryRunner.createTable(new Table({
    		name: 'lesson',
    		columns: [
    		{
    			name: 'id',
    			type: 'uuid',
    			isPrimary: true,
    			generationStrategy: 'uuid',
    			default: 'uuid_generate_v4()'
    		},
    		{
    			name: 'name',
    			type: 'varchar'
    		},
    		{
    			name: 'duration',
    			type: 'integer'
    		},
    		{
    			name: 'course_id',
    			type: 'uuid'
    		},
    		{
    			name: 'description',
    			type: 'varchar'
			},
			{
				name: "is_completed",
				type: "integer",
				default: '0'
			},
    		{
    			name: 'video_id',
    			type: 'varchar'
    		},
    		{
    			name: 'created_at',
    			type: 'timestamp',
    			default: 'now()'
    		},
    		{
    			name: 'updated_at',
    			type: 'timestamp',
    			default: 'now()'
    		},
    		]
    	}));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    	await queryRunner.dropTable('lesson');
    }

}
