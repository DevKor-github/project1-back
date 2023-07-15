import { EntitySchema, ManyToOne } from "typeorm";
import userSchema from "./User.js";

const messageSchema = new EntitySchema ({
    name: 'message',
    tableName: 'message',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        sender_id: {
            type: 'int',
        },
        receiver_id: {
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
       sender: {
        type: ManyToOne,
        target: () => userSchema,
        joinColumn: {
            name: 'sender_id',
            referencedColumnName: 'user_id',
            },
        },
        receiver: {
            type: ManyToOne,
            target: () => userSchema,
            joinColumn: {
                name: 'receiver_id',
                referencedColumnName: 'user_id',
            },
        },
    },
});

export default messageSchema;