import { LoginRequest } from "../interfaces/LoginRequest";
import { LoginResult } from "../interfaces/LoginResult";
import { ReactNode, createContext, useContext } from "react";
import { environments } from '../environments/environments';
import { useState, useEffect } from "react";
import axiosInstance from "../utils/Interceptor";


interface AuthContextProps {
  authStatus: boolean;
  login: (loginItem: LoginRequest) => Promise<LoginResult>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export default AuthContext

export const useAuthService = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuthService must be used within an AuthServiceProvider');
    }
    return context;
}

export const AuthServiceProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const [authStatus, setAuthStatus] = useState<boolean>(false);

    const isAuthenticated = (): boolean => {
        return getToken() !== null;
    };

    useEffect(() => {
        // Check if 'authToken' is stored in localStorage
        const authToken = localStorage.getItem("authToken");
    }, []);

    useEffect(() => {
        const isUserAuthenticated: boolean = isAuthenticated();
        setAuthStatus(isUserAuthenticated);
    }, []);

    const getToken = (): string | null => {
        return localStorage.getItem('authToken');
     };

    const login = async (loginItem: LoginRequest): Promise<LoginResult> => {
        // asynchronous HTTP request
        // await to wait for the promise
        try {
            const response = await axiosInstance.post('/api/Admin', loginItem);
            const data: LoginResult = response.data;

            if (data.success && data.token) {
                // Store the token in local storage
                localStorage.setItem('authToken', data.token);
                // Set authentication to true
                setAuthStatus(true);
            }

            console.log(response);
            console.log(data);

            return data;
        } catch (error) {
            console.error(error);
            // Handle error here
            throw error;
        }
    };

    const logout: () => void = () => {
        localStorage.removeItem("authToken");
        setAuthStatus(false); //publish
    }

    return (
    <AuthContext.Provider value={{ authStatus, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private _authStatus = new Subject<boolean>();
//   public authStatus = this._authStatus.asObservable();

//   constructor(protected http: HttpClient) { }

//   init() {
//     if (this.isAuthenticated()) {
//       this.setAuthStatus(true);  
//     }
//   }

//   getToken(): string | null {
//     return localStorage.getItem("comp584-token");
//   }

//   isAuthenticated(): boolean {
//     return this.getToken() != null;
//   }

//   setAuthStatus(isAuthenticated: boolean) {
//     this._authStatus.next(isAuthenticated);
//   }

//   login(loginItem: LoginRequest): Observable<LoginResult> {
//     let url = environment.baseUrl + "/api/admin";

//     return this.http.post<LoginResult>(url, loginItem)
//       .pipe(tap((loginResult: LoginResult) => { // Added parentheses around the parameter
//         if (loginResult.success && loginResult.token) {
//           localStorage.setItem("comp584-token", loginResult.token);
//           this.setAuthStatus(true); //publish authentication status
//         }
//       }));
//   }
//   logout() {
//     localStorage.removeItem("comp584-token");
//     this.setAuthStatus(false); //publish
//   }
// }
