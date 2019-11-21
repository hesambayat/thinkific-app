import gql from 'graphql-tag'

const CREATE_COURSE = gql`
  mutation CreateCourse($name: String!) {
    createCourse(data: {
      name: $name
    }) {
      id
      name
    }
  }
`

const UPDATE_COURSE = gql`
  mutation UpdateCourse($id: ID!, $name: String, $subtitle: String, $price: Float, $duration: Float, $desciption: String) {
    updateCourse(id: $id, data: {
      name: $name
      subtitle: $subtitle
      price: $price
      duration: $duration
      desciption: $desciption
    }) {
      id
    }
  }
`

const DELETE_COURSE = gql`
  mutation DeleteCourse($id: ID!) {
    deleteCourse(id: $id) {
      id
    }
  }
`

const CREATE_CAPTURE = gql`
  mutation CreateCapture($courseId: ID!, $title: String!, $order: Int!) {
    createCapture(courseId: $courseId, data: {
      title: $title
      order: $order
    }) {
      id
      title
      order
    }
  }
`

const UPDATE_CAPTURE = gql`
  mutation UpdateCapture($courseId: ID!, $id: ID!, $title: String!, $order: Int!) {
    updateCapture(courseId: $courseId, id: $id, data: {
      title: $title
      order: $order
    }) {
      id
      title
      order
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

export { CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE, CREATE_CAPTURE, UPDATE_CAPTURE, CREATE_USER, LOGIN }