import { useContext } from 'react'
import AuthContext from '../services/AuthService'
import { environments } from '../environments/environments'

const useAxios = () => {
    const {authTokens, setUser, setAuthTokens} = useContext(AuthContext);
    
}
