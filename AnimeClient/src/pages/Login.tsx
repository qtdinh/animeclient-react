import { LoginComponent } from "../components/LoginComponent";
import { AuthServiceProvider } from '../services/AuthService';


const Login = () => {
  return (
    <AuthServiceProvider>
        <div className="login">
            <h1>Login</h1>
            <LoginComponent />
        </div>
    </AuthServiceProvider>
  )
}

export default Login;