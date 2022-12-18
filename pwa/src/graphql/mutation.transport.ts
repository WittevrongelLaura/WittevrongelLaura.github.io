import gql from 'graphql-tag'

export const ADD_TRANSPORT = gql`
  mutation createTransport($createTransportInput: CreateTransportInput!) {
    createTransport(createTransportInput: $createTransportInput) {
        id
        checklistId
        driver
        amountOfSeats
        people {
            id
            uid
            name
            role
            createdAt
            updatedAt
        }
    }
  }
`