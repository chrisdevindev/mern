import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      name: newUser.name,
      email: newUser.email,
      senha: newUser.senha
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      senha: user.senha
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}