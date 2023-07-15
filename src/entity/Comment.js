import { EntitySchema, ManyToOne } from "typeorm";
import postSchema from "./Post.js";

const commentSchema = new EntitySchema ({
    name: 'comment',
    tableName: 'comment',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        user_id: {
            type: 'int',
        },
        post_id: {
            type: 'int',
        },
        content: {
            type: 'varchar',
            length: 255,
        },
        date: {
            type: 'int',
        },
    },
    relations: {
        post: {
            type: ManyToOne,
            target: () => postSchema,
            joinColumn: {
                name: 'id',
                referencedColumnName: 'post_id'
            },
        },
    },
});

export default commentSchema;

