import { EntitySchema } from 'typeorm';

// major
const majorSchema = new EntitySchema({
  name: 'major',
  tableName: 'major',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    recruiting: {
      type: 'int',
    },
  },
  relations: {
    passer: {
      // many passer per one second major?
      type: 'one-to-many',
      target: 'passer',
      inverseSide: 'second_major_id',
    },
    hope: {
      // many hope per one major?
      type: 'one-to-many',
      target: 'hope',
      inverseSide: 'hope_major_id',
    },
    user: {
      // many user per one first major?
      type: 'one-to-many',
      target: 'user',
      inverseSide: 'first_major_id',
    },
  },
});

export default majorSchema;
