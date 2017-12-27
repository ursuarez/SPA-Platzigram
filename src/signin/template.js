var yo = require('yo-yo')
var landing = require('../landing')

var signinForm = yo`<div class="col s12 m7">
						<div class="row">
							<div class="signup-box">
								<h1 class="platzigram">Platzigram</h1>

								<form class="signup-form">
								
									<div class="section">
										<a href="#" class="btn btn-fb hide-on-small-only"><i class="fa fa-facebook-square left" aria-hidden="true"></i>Iniciar sesión con Facebook</a>
										<a href="#" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
									</div>	
									<div class="divider"></div>	
									<div class="section">
										<input type="text" 	   name="username" placeholder="Nombre de Usuario"/>
										<input type="password" name="password" placeholder="Contraseña"/>

										<button type="button" class="waves-effect waves-light btn btn-register" type="submit">Iniciar sesión</button>
									</div>				
								</form>
							</div>
						</div>

						<div class="row">
							<div class="login-box">
								¿No tienes una cuenta? <a href="/signup">Regístrate</a>
							</div>
						</div>
					</div>`

module.exports = landing(signinForm);