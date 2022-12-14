
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo';

const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password, 'aca formulario')
    setPassword('')
    setEmail('')
  }
  return(
    <div className='login_container'>
      <div className='column_1'>
        <form className='login_form' onSubmit={handleLogin}>
          <h1>Xpress</h1>
          <h3>Registrarse</h3>
          <label>Nombre de usuario:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <label>Repeat password:</label>
          <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} />
          <button>Sign Up</button>
          <div>¿Ya tienes cuenta? <Link to='/login' >Inicia sesión</Link></div>
        </form>
      </div>
      <div className='column_2'>
        <BrandLogo/>
      </div>
      <div className='footer_login1'>
        <div>© Copyright 2022 by FranciscoMansilla</div>
      </div>
      <div className='footer_login2'></div>
    </div>
  )
}
export default Register