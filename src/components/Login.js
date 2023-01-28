import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='bodylog'>
       	<div class="main">  	
		<input className='input' type="checkbox" id="chk" aria-hidden="true" />

			<div class="signup">
				<form>
					<label className='labellog' for="chk" aria-hidden="true">Criar Conta</label>
					<input className='input' type="text" name="txt" placeholder="Nome" required="" />
					<input className='input' type="email" name="email" placeholder="E-mail" required="" />
					<input className='input' type="password" name="pswd" placeholder="Palavra-passe" required="" />
					<button className='loginbtn'>Criar</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label className='labellog' for="chk" aria-hidden="true">Login</label>
					<input className='input' type="email" name="email" placeholder="E-mail" required />
					<input className='input' type="password" name="pswd" placeholder="Palavra-passe" required />
					<button className='loginbtn'>Login</button>
				</form>
			</div>
	</div>
    </div>
  )
}

export default Login