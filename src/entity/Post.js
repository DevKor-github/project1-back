import { EntitySchema, ManyToOne, OneToMany } from "typeorm";
import categorySchema from "./Category.js";
import commentSchema from "./Comment.js";
import userSchema from "./User.js";

const postSchema = new EntitySchema ({
    name: 'post',
    tableName: 'post',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        user_id: {
            type: 'int',
        },
        category_id: {
            type: 'int',
        },
        title: {
            type: 'varchar',
            length: 255,
        },
        description: {
            type: 'varchar',
            length: 255,
        },
        date: {
            type: 'int',
        },
    },
    relations: {
        /*
        category: {
            type: ManyToOne,
            target: () => categorySchema,
            joinColumn: {
                name: 'category_id',
                referencedColumnName: 'id',
            },
        },*/
        comment: {
            type: OneToMany,
            target: () => commentSchema,
            joinColumn: {
                name: 'post_id',
                referencedColumnName: 'id'
            },
        },
        user: {
            type: ManyToOne,
            target: () => userSchema,
            joinColumn: {
                name: 'post_id',
                referencedColumnName: 'user_id',
            },
        },
    },
});

export default postSchema;

