export default interface FormRecord {
  marks: string
  recordType: RecordTypes
  login: string
  password: string
  key: number
}

export enum RecordTypes {
  LOCAL = 'local',
  LDAP = 'ldap',
}
