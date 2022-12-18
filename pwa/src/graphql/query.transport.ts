import gql from 'graphql-tag';

export const TRANSPORTSBYID = gql`
    query transportsById($checklistId: String!) {
        transportsByChecklistId(checklistId: $checklistId) {
            id
            driver
            amountOfSeats
            people{
                id
                uid
                name
                role
                createdAt
                updatedAt
            }
        }
    }
`;

