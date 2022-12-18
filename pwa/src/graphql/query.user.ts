import gql from 'graphql-tag'

export const GET_USER_BY_UID = gql`
  query findByUid($uid: String!) {
    findByUid(uid: $uid) {
      id
      uid
      name
      role
      templates {
        id
        name
        items
      }
      createdAt
      updatedAt
    }
  }
`

export const GET_USERS = gql`
  query users {
    users {
      id
      name
      role
      uid
    }
  }
`

export const GET_TEMPLATE_BY_UID = gql`
  query findTemplateByUid($uid: String!) {
    findTemplateByUid(uid: $uid) {
      id
      uid
      templates {
        id
        name
        items
      }
    }
  }
`
