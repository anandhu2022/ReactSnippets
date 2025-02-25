import AuthProvider from "./context/AuthContext.tsx";
import Header from "./components/Header.tsx";
import PageRouter from "./routes/PageRouter.tsx";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header/>
                <PageRouter/>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
