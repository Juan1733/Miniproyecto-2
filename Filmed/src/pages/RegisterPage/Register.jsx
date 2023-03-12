import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css"
import { LOGIN_URL } from "../../constants/urls";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth/index";
import { useState } from "react";


export function Register() {

    const [formData, setFormData]= useState({
        name: "",
        email: "",
        password: "",
    })

    const onSubmit = async (event) => {
      event.preventDefault();
      console.log(formData);
      await registerWithEmailAndPassword(formData.email, formData.password);
    };

    // const navigate = useNavigate();
  
    const onSuccess = () => {
      navigate(HOME_URL);
    };
  
    const onFail = (_error) => {
      console.log("REGISTER FAILED, Try Again");
    };
  
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
  
    //   await registerWithEmailAndPassword({
    //     userData: formData,
    //     onSuccess,
    //     onFail,
    //   });
    // };
  
    // const handleGoogleClick = async () => {
    //   await signInWithGoogle({
    //     onSuccess: () => navigate(HOME_URL),
    //   });
    // };
  
    const handleOnChange = (event) => {
      const { name, value } = event.target;
      setFormData({
          ...formData,
          [name]: value
      })
    };

    return(
        <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='d-flex align-items-center'>
                <img src="https://media.istockphoto.com/id/1001414360/photo/multi-ethnic-teenage-friends-watching-tv-together-at-hangout-house.jpg?s=612x612&w=0&k=20&c=3npZe24UFEBNrEvuX6w0u0Rt_OBjXGp4D206Jpa-LCA=" className={styles.image}/>
            </div>

            <div className="pt-5 px-3">
                <h2 className="text-white mb-3">Registrarse</h2>
                <p className="text-white">¿Ya tienes una cuenta? <a href={LOGIN_URL} className={styles.anchor}>Accede aqui</a></p>
                
                <form className={styles.formFormat} onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="InputName" name="name" placeholder="John" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-white">Apellido</label>
                        <input type="text" className="form-control" id="InputLastName" name="lastName" placeholder="Doe" onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-white">Correo</label>
                        <input type="email" className="form-control" id="InputEmail1" name="email" placeholder="example@gmail.com" onChange={handleOnChange} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-white">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword1" name="password" placeholder="********" onChange={handleOnChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-white">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="InputPassword2" placeholder="********" onChange={handleOnChange} />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className={`btn btn-primary py-2 mt-2 ${styles.registerButton}`}>Registrarse</button>
                    </div>
                    <button type="button"  className={`btn btn-secondary mt-3 py-2 mb-5 ${styles.button2}`}>Registrate con Google</button>
                    
                </form>                    
            </div>
        </div>
    );
}