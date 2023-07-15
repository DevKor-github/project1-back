import { EntitySchema, OneToOne, OneToMany } from 'typeorm';
import passerSchema from './Passer.js';
import majorSchema from './Major.js';
import candidateSchema from './Candidate.js';
import messageSchema from './Message.js';
import postSchema from './Post.js';

const userSchema = new EntitySchema ({
	
	name: 'user',
	tableName: 'user',
	columns: {
		user_id: {
			type: 'int',
			primary: true,
			generated: true,
		},
		password: {
			type: 'int',
		},
		student_id: {
			type: 'int',
		},
		email: {
			type: 'varchar',
			length: 255,
		},
		first_major: {
			type: 'varchar',
			length: 255,
		},
		name: {
			type: 'varchar',
			length: 255,
		},
		nick_name: {
			type: 'varchar',
			length: 255,
		},
		passer_id: {
			type: 'int',
		},
		candidate_id: {
			type: 'int',
		},
		post_id: {
			type: 'int',
		},
	},
	relations: {	
		passer: {		
			type: OneToOne,
			target: () => passerSchema,
			joinColumn: {
				name: 'passer_id',
				referencedColumnName: 'user_id',
				unique: true,
			},
		},
		major: {		
			type: OneToOne,
			target: () => majorSchema,
			joinColumn: {
				name: 'student_id',
				referencedColumnName: 'id',
			},
		},
		candidate: {
			type: OneToOne,
			target: () => candidateSchema,
			joinColumn: {
				name: 'candidate_id',
				referencedColumnName: 'user_id',
			},
		},
		sentMessage: {
			type: OneToMany,
			target: () => messageSchema,
			inverseSide: 'sender',
			joinColumn: {
				name: 'user_id',
				referencedColumnName: 'sender_id',
			},
		},
		receiveMessage: {
			type: OneToMany,
			target: () => messageSchema,
			inverseSide: 'receiver',
			joinColumn: {
				name: 'user_id',
				referencedColumnName: 'receiver_id',
			},
		},
		post: {
			type: OneToMany,
			target: () => postSchema,
			joinColumn: {
				name: 'user_id',
				referencedColumnName: 'post_id',
			},
		},
	},
});

export default userSchema;