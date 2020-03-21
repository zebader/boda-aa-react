import React, { useState } from 'react';
import { withAuth } from "../../../lib/AuthProvider";

const Login = props => {
  const [username, setOnChangeName] = useState('')
  const [password, setOnChangePass] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const user = { username: username, password:password,}
    props.login(user);
  }

  return (
    <article className=''>
      <form onSubmit={handleFormSubmit} autoComplete='off'>
        <input
          name='username'
          id='username'
          type='text'
          value={username}
          placeholder='Usuario'
          onChange={(e) => setOnChangeName(e.target.value)} />
        <input
          name='password'
          id='password'
          type='password'
          value={password}
          placeholder='Contraseña'
          onChange={(e) => setOnChangePass(e.target.value)} />

        <button type='submit'
        >Submit</button>
      </form>

    </article>
  )
}

export default withAuth(Login);