import gql from 'graphql-tag';

export const TEMPLATES = gql`
    query {
        templates {
            id
            name
            items
        }
    }
`;
