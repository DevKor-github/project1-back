import { EntitySchema } from 'typeorm';

// user
const userSchema = new EntitySchema({
  name: 'user',
  tableName: 'user',
  columns: {
    user_id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    password: {
      type: 'varchar',
    },
    student_id: {
      type: 'varchar',
      length: 10,
    },
    email: {
      type: 'varchar',
    },
    name: {
      type: 'varchar',
    },
    nickname: {
      type: 'varchar',
      unique: true,
    },
  },
  relations: {
    first_major_id: {
      // many user per one first major?
      type: 'many-to-one',
      target: 'major',
      joinColumn: {
        name: 'first_major_id',
      },
    },
    passer_id: {
      type: 'one-to-one',
      target: 'passer',
      joinColumn: {
        name: 'passer_id',
      },
    },
    candidate_id: {
      type: 'one-to-one',
      target: 'candidate',
      joinColumn: {
        name: 'candidate_id',
      },
    },
    message_sender: {
      type: 'one-to-many',
      target: 'message',
      inverseSide: 'sender_id',
    },
    message_receiver: {
      type: 'one-to-many',
      target: 'message',
      inverseSide: 'receiver_id',
    },
    post_writer: {
      type: 'one-to-many',
      target: 'post',
      inverseSide: 'user_id',
    },
    comment_writer: {
      type: 'one-to-many',
      target: 'comment',
      inverseSide: 'user_id',
    },
  },
});

// passer
const passerSchema = new EntitySchema({
  name: 'passer',
  tableName: 'passer',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    pass_semester: {
      type: 'varchar',
      length: 4,
      // ex) 23-1
    },
    pass_gpa: {
      type: 'float',
    },
    wanna_sell: {
      type: 'bool',
    },
    pass_check: {
      type: 'bool',
    },
    pass_image: {
      type: 'bytea',
    },
    pass_description: {
      type: 'varchar',
    },
  },
  relations: {
    user_id: {
      type: 'one-to-one',
      target: 'user',
      joinColumn: {
        name: 'user_id',
      },
    },
    second_major_id: {
      // many passer per one second major?
      type: 'many-to-one',
      target: 'major',
      joinColumn: {
        name: 'second_major_id',
      },
    },
    user: {
      type: 'one-to-one',
      target: 'user',
      inverseSide: 'passer_id',
    },
  },
});

// candidate
const candidateSchema = new EntitySchema({
  name: 'candidate',
  tableName: 'candidate',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    gpa: {
      type: 'float',
    },
  },
  relations: {
    user_id: {
      type: 'one-to-one',
      target: 'user',
      joinColumn: {
        name: 'user_id',
      },
    },
    application: {
      type: 'one-to-many',
      target: 'application',
      inverseSide: 'candidate_id',
    },
    hope: {
      // many hope per one candidate?
      type: 'one-to-many',
      target: 'hope',
      inverseSide: 'candidate_id',
    },
    user: {
      type: 'one-to-one',
      target: 'user',
      inverseSide: 'candidate_id',
    },
  },
});

export { userSchema, passerSchema, candidateSchema };
