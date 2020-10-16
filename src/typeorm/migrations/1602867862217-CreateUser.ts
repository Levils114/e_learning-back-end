import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUser1602867862217 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.createTable(new Table({
    		name: 'user',
    		columns: [{
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
    			name: 'email',
    			type: 'varchar',
    		},
    		{
    			name: 'password',
    			type: 'varchar'
    		},
    		{
    			name: 'created_at',
    			type: 'timestamp',
    			default: 'now()'
    		},
    		{
    			name: 'update_at',
    			type: 'timestamp',
    			default: 'now()'
    		}
    		]
    	}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.dropTable('user');
    }

}
