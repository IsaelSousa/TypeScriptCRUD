import { useEffect, useState } from 'react';
import api from '../../services/api';
import './style.scss';

function LoginPage(){
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ name, setName ] = useState('');

  useEffect( () => {
    api.get('/login').then( resp => setName(resp.data.users) ).catch( e => console.log(e) );
  },[])

  console.log(email);
  console.log(password);
  async function handleRegister(e:any) {
      e.preventDefault();

    const data = {
      email,
      password
    }

    try {
      await api.post('/login', data);
      alert(` Seja Bem-vindo ${name} `);
    } catch {
      alert(' Login não efetuado. ');
    }

  }

  return(
    <div className="container">

      <form onSubmit={handleRegister} action="/login">

        <label htmlFor="inputEmail">Email</label>
        <input type="text" name="inputEmail" value={email} onChange={ e => setEmail(e.target.value) } />

        <label htmlFor="inputPass">Password</label>
        <input type="password" name="inputPass" value={password} onChange={ e => setPassword(e.target.value) } />

        <button>Submit</button>

      </form>

    </div>
  )
}

export default LoginPage;