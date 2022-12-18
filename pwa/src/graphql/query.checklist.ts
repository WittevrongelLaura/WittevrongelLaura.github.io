import gql from 'graphql-tag'

export const CHECKLIST = gql`
  query checklists {
    checklists {
      id
      name
      userId
      sharedUserIds
      description
      updatedAt
      createdAt
      categories {
        name
        list {
          check
          name
        }
      }
    }
  }
`
export const CHECKLIST_BY_ID = gql`
  query checklist($id: String!) {
    checklist(id: $id) {
      id
      name
      description
      userId
      sharedUserIds
      categories {
        name
        list {
          check
          name
        }
      }
      updatedAt
      createdAt
    }
  }
`

export const CHECKLIST_BY_UID = gql`
  query checklistsByUserId {
    checklistsByUserId {
      id
      name
      userId
      sharedUserIds
      description
      updatedAt
      createdAt
      categories {
        name
        list {
          check
          name
        }
      }
    }
  }
`

export const SHARED_CHECKLISTS = gql`
  query sharedChecklists {
    sharedChecklists {
      id
      name
      userId
      sharedUserIds
      description
      updatedAt
      createdAt
      categories {
        name
        list {
          check
          name
        }
      }
    }
  }
  `


