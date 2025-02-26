import AuthProvider from "./context/Auth/AuthContext.tsx";
import Header from "./components/Header.tsx";
import PageRouter from "./routes/PageRouter.tsx";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./context/Theme/ThemeContext.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <div className="h-screen">
                        <Header/>
                        <PageRouter/>
                    </div>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
