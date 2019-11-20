import gql from 'graphql-tag'

const CREATE_COURSE = gql`
  mutation CreateUser($name: String!) {
    createCourse(data: {
      name: $name
    }) {
      id
      name
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($email: String!, $name: String!, $password: String!) {
    createUser(data: {
      name: $name
      email: $email
      password: $password
    }) {
      user {
        id
      }
    }
  }
`

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: {
      email: $email
      password: $password
    }) {
      token
      user {
        id
        name
      }
    }
  }
`

export { CREATE_COURSE, CREATE_USER, LOGIN }