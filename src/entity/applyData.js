import { EntitySchema } from 'typeorm';

export const applyDataSchema = new EntitySchema({
  name: 'application',
  tableName: 'application',
  //primary key
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    //합격 여부를 저장한다.
    pass_or_nonpass: {
      type: 'enum',
      enum: ['yes', 'no'],
    },
    //20232 등 5자리의 숫자로 받는다
    applied_semester: {
      type: 'varchar',
      length: 5,
    },
    //1, 2, 3지망을 받음. 2지망은 null 가능
    applied_major1: {
      type: 'varchar',
      size: 20,
    },
    applied_major2: {
      type: 'varchar',
      size: 20,
      nullable: true,
    },
    //재지원 여부를 저장한다.
    apply_times: {
      type: 'enum',
      enum: ['yes', 'no'],
    },
    //지원 확인 여부를 저장한다.
    apply_check: {
      type: 'enum',
      enum: ['yes', 'no'],
    },
    //기타 참고할 사항을 적는 text field
    apply_description: {
      type: 'text',
    },
    //image file을 byte로 저장한다.
    applied_image: {
      type: 'bytea',
    },
  },
  relations: {
    //user는 오직 하나만 가질 수 있고, 지원 정보는 학기별로 하나이므로 여러 개가 가능하다.
    candidate: { type: 'many-to-one', target: 'candidateUserInfo', joinColumn: { name: 'candidate_id' } },
  },
});
