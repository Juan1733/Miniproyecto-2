import styles from "./Login.module.css"
import { REGISTER_URL } from '../../constants/urls'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth/index";



export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData]= useState({
    email: "",
    password: "",
  })

  
  const onSubmit = async (event) => {
    try{
      event.preventDefault();
      const {email, password} = formData;
      await loginWithEmailAndPassword( email, password )
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  };
  const handleGoogleClick = async () => {
    await signInWithGoogle();
    navigate("/");
  };
  
  const handleOnChange = (event) => {
  const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };
  

    return(
        <div className={`d-flex justify-content-evenly align-items-center flex-wrap ${styles.container}`}>
            <div>
                <img src="https://media.istockphoto.com/id/1392123667/es/foto/vista-trasera-de-una-familia-viendo-la-televisi%C3%B3n-en-casa.jpg?b=1&s=170667a&w=0&k=20&c=mUcKiwaAQpV5Cg1X0D5tdPbtaI3k4H6Frf7Me_GRlEk=" className={styles.image} />
            </div>


            <div>
                {/* <Link to={REGISTER_URL}>¿No tienes cuenta?{" "} <span>Registrate</span></Link> */}
                <span className="text-light">¿No tienes cuenta? <a href={REGISTER_URL} className={styles.anchor}>Registrate aqui{" "}</a></span>
                <h2 className="text-light mt-4 mb-3">Iniciar sesión</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-light bg-dark">Correo</label>
                        <input type="email" className="form-control" id="InputEmail1" placeholder="example@gmail.com" name="email" onChange={handleOnChange} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-light bg-dark">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1" name="password" placeholder="********" onChange={handleOnChange} />
                    </div>
                    <button type="submit" className={`btn py-2 my-2 mb-3 ${styles.button1}`}>Iniciar</button>
                </form>

                    <button type="button" onClick={handleGoogleClick} className={`btn btn-secondary pb-2 ${styles.button2}`}>Continuar con Google</button>

            </div>
        </div>
    )
}