import { EntitySchema } from 'typeorm';

// post
const postSchema = new EntitySchema({
  name: 'post',
  tableName: 'post',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    title: {
      type: 'varchar',
      nullable: false,
      length: 100,
    },
    description: {
      type: 'varchar',
      nullable: false,
      length: 500,
    },
    date: {
      type: 'timestamp',
    },
  },
  relations: {
    user_id: {
      type: 'many-to-one',
      target: 'user',
      joinColumn: {
        name: 'user_id',
      },
    },
    category_id: {
      type: 'many-to-one',
      target: 'category',
      joinColumn: {
        name: 'category_id',
      },
    },
    message: {
      type: 'one-to-many',
      target: 'message',
      inverseSide: 'post_id',
    },
    comment: {
      type: 'one-to-many',
      target: 'comment',
      inverseSide: 'post_id',
    },
  },
});

// comment
const commentSchema = new EntitySchema({
  name: 'comment',
  tableName: 'comment',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    content: {
      type: 'varchar',
    },
    date: {
      type: 'timestamp',
    },
  },
  relations: {
    user_id: {
      type: 'many-to-one',
      target: 'user',
      joinColumn: {
        name: 'user_id',
      },
    },
    post_id: {
      type: 'many-to-one',
      target: 'post',
      joinColumn: {
        name: 'post_id',
      },
    },
    // TODO: 맞나?
    parent_id: {
      // many childComments per one parentComment
      type: 'many-to-one',
      target: 'comment',
      joinColumn: {
        name: 'parent_id',
      },
    },
    message: {
      type: 'one-to-many',
      target: 'comment',
      inverseSide: 'parent_id',
    },
  },
});

// category
const categorySchema = new EntitySchema({
  name: 'category',
  tableName: 'category',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
    },
  },
  relations: {
    post: {
      type: 'one-to-many',
      target: 'post',
      inverseSide: 'category_id',
    },
  },
});

// message
const messageSchema = new EntitySchema({
  name: 'message',
  tableName: 'message',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    content: {
      type: 'varchar',
    },
    date: {
      type: 'timestamp',
    },
  },
  relations: {
    sender_id: {
      type: 'many-to-one',
      target: 'user',
      joinColumn: {
        name: 'sender_id',
      },
    },
    receiver_id: {
      type: 'many-to-one',
      target: 'user',
      joinColumn: {
        name: 'receiver_id',
      },
    },
    post_id: {
      type: 'many-to-one',
      target: 'post',
      joinColumn: {
        name: 'post_id',
      },
    },
  },
});

export { postSchema, commentSchema, categorySchema, messageSchema };
