import { EntitySchema } from 'typeorm';

export const userSchema = new EntitySchema({
  name: 'User',
  tableName: 'User',
  columns: {
    //primary key
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    //password hash로 암호화해서 저장해야 함.
    password: {
      type: 'varchar',
      length: 20,
    },
    //10자리의 학번을 문자열로 입력받는다.
    student_id: {
      type: 'varchar',
      length: 10,
    },
    //email, 이름, nickname을 받는다.
    email: {
      type: 'varchar',
      length: 40,
    },
    name: {
      type: 'varchar',
      length: 30,
    },
    nickname: {
      type: 'varchar',
      length: 30,
    },
  },
  relations: {
    //passer, candidate 정보 둘 중 하나를 fk로 반드시 가져야 한다.
    passerInfo: {
      type: 'one-to-one',
      target: 'passedUserInfo',
      joinColumn: { name: 'passerInfo_id' },
    },
    candidateInfo: {
      type: 'one-to-one',
      target: 'candidateUserInfo',
      joinColumn: { name: 'candidateInfo_id' },
    },
    //주전공을 fk로 받아 온다.
    first_major: {
      type: 'many-to-one',
      target: 'major',
      joinColumn: { name: 'first_major_id' },
    },
    //작성한 post가 user와 연결됨.
    // posts: {
    //   type: 'one-to-many',
    //   target: 'post',
    //   inverseSide: 'user',
    // },
    //보낸 message가 user와 연결
    send_message: {
      type: 'one-to-many',
      target: 'message',
      inverseSide: 'sender',
    },
    //받은 message가 user와 연결
    receive_message: {
      type: 'one-to-many',
      target: 'message',
      inverseSide: 'receiver',
    },
  },
});

export const passedUserInfoSchema = new EntitySchema({
  name: 'passedUserInfo',
  tableName: 'passedUserInfo',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    //20231과 같은 5자리 문자열로 받는다.
    pass_semester: {
      type: 'varchar',
      length: 5,
    },
    //pass 학점을 실수로 받는다.
    pass_gpa: {
      type: 'float',
    },
    //자소서를 팔 의향이 있는지를 저장한다.
    wanna_sell: {
      type: 'enum',
      enum: ['yes', 'no'],
    },
    //합격 확인이 되었는지를 저장한다.
    pass_check: {
      type: 'enum',
      enum: ['yes', 'no'],
    },
    //image file을 byte로 저장
    passed_image: {
      type: 'bytea',
    },
    //기타 합격 정보를 저장한다.
    pass_description: {
      type: 'text',
    },
  },
  relations: {
    //user와의 관계를 매핑해 준다.
    user: { type: 'one-to-one', target: 'User', inverseSide: 'passerInfo' },
    second_major: {
      type: 'many-to-one',
      target: 'major',
      joinColumn: { name: 'second_major_id' },
    },
  },
});

export const candidateUserInfoSchema = new EntitySchema({
  name: 'candidateUserInfo',
  tableName: 'candidateUserInfo',
  columns: {
    //학번, 관심 전공, 학점을 입력받는다.
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    //현재 학점을 입력받는다.
    gpa: {
      type: 'float',
    },
  },
  relations: {
    //user와의 관계를 매핑한다.
    user: { type: 'one-to-one', target: 'User', inverseSide: 'candidateInfo' },
    //hope를 통해 희망 major를 저장한다.
    hopes: { type: 'one-to-many', target: 'hope', inverseSide: 'candidate' },
    //hope를 통해 희망 major를 저장한다.
    applydata: { type: 'one-to-many', target: 'application', inverseSide: 'candidate' },
  },
});
