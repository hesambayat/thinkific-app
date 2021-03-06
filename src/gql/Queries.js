import gql from 'graphql-tag'

const GET_COURSE = gql`
  query Course($id: ID!) {
    course(where: {
      id: $id
    }) {
      id
      name
      subtitle
      price
      desciption
      duration
      captures {
        id
        order
        title
        contents {
          id
          order
          title
        }
      }
    }
  }
`

const GET_PROFILE = gql`
  query {
    me {
      id
      name
      email
      courses {
        id
        name
        price
        duration
        captures {
          id
          order
          title
          contents {
            id
            order
            title
          }
        }
      }
    }
  }
`

export { GET_COURSE, GET_PROFILE }