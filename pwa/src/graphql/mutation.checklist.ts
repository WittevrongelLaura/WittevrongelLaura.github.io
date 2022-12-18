import gql from 'graphql-tag'

export const ADD_CHECKLIST = gql`
  mutation createChecklist($createChecklistInput: CreateChecklistInput!) {
    createChecklist(createChecklistInput: $createChecklistInput) {
      id
      name
      description
      sharedUserIds
      userId
      updatedAt
      createdAt
      categories {
        name
        list {
          name
          check
        }
      }
    }
  }
`

export const REMOVE_CHECKLIST = gql`
  mutation removeChecklist($id: String!) {
    removeChecklist(id: $id) {
      message
    }
  }
`

export const UPDATE_CHECKLIST = gql`
mutation updateChecklist($updateChecklistInput: UpdateChecklistInput!) {
  updateChecklist(updateChecklistInput: $updateChecklistInput) {
    id
    name
    description
    categories {
      name
      list {
        name
        check
      }
    }
  }
}

`
export const UPDATE_SHARED_USER_IDS = gql`
mutation updateSharedUserIds($updateChecklistIds: UpdateChecklistIds!) {
  updateSharedUserIds(updateChecklistIds: $updateChecklistIds) {
    id
    description
    sharedUserIds
    categories {
      name
      list {
        name
        check
      }
    }
  }
}`
