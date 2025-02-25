import Button from "../components/Button.tsx";
import {useAuth} from "../context/AuthContext.tsx";

const Login = () => {
    const {login} = useAuth();
    return (
        <Button name={"Login"} handleClick={login}/>
    );
};

export default Login;
