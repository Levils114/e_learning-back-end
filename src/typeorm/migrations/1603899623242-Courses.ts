import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Courses1603899623242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
    	await queryRunner.createTable(new Table({
    		name: "courses",
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
    	}))

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    	await queryRunner.dropTable('courses');
    }

}
