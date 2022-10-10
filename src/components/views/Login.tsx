
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password, 'aca formulario')
    setPassword('')
    setEmail('')
  }
  return(
    <div className='login_container'>
      <form className='login_form' onSubmit={handleLogin}>
        <h1>Xpress</h1>
        <h3>Conectarse</h3>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button>Login</button>
        <div style={{marginBottom: '.5rem'}}>¿Olvidaste tu contraseña? <Link to='/register' >Recuperala aqui</Link></div>
        <div>¿No tienes cuenta? <Link to='/register' >Registrate</Link></div>
      </form>
    </div>
  )
}
export default Login