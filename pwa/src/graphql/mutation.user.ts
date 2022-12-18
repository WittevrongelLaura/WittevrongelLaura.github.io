import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      uid
      name
      role
      createdAt
      updatedAt
      templates {
        id
        name
        items
      }
    }
  }
`

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      uid
      name
      role
      createdAt
      updatedAt
      templates {
        id
        name
        items
      }
    }
  }
`
