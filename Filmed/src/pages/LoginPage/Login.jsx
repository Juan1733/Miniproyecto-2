import styles from "./Login.module.css"
import { REGISTER_URL } from '../../constants/urls'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth/index";



export const Login = () => {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const onSuccess = () => {
      navigate(HOME_URL);
    };
  
    const onFail = (_error) => {
      console.log("LOGIN FAILED, Try Again");
    };
  
    const onSubmit = async (event) => {
      event.preventDefault();
  
      await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
    };
  
    const onChange = (event) => {
      const { name, value } = event.target;
  
      setFormData((oldData) => ({ ...oldData, [name]: value }));
    };
  
    const handleGoogleClick = async () => {
      await signInWithGoogle({
        onSuccess: () => navigate(HOME_URL),
      });
    };
  

    return(
        <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='img-container'>
                <img src="https://thumbs.dreamstime.com/b/family-mother-father-children-watching-projector-tv-movies-popcorn-evening-home-family-mother-father-children-158601206.jpg" className={styles.image} />
            </div>


            <div className='pt-5'>
                {/* <Link to={REGISTER_URL}>¿No tienes cuenta?{" "} <span>Registrate</span></Link> */}
                <span class="text-light bg-dark">¿No tienes cuenta? <a href={REGISTER_URL} className={styles.anchor}>Registrate aqui{" "}</a></span>
                <h2 class="text-light bg-dark">Iniciar sesión</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label" class="text-light bg-dark">Correo</label>
                        <input type="email" className="form-control" id="InputEmail1" placeholder="JohnDoe@gmail.com" onChange={onChange} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label" class="text-light bg-dark">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1" placeholder="********" onChange={onChange} />
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.button1}`}>Iniciar</button>
                </form>

                    <button type="button" onClick={handleGoogleClick} className={`btn btn-secondary pb-2 ${styles.button2}`}>Continuar con Google</button>

            </div>
        </div>
    )
}