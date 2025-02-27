import AuthProvider from "./context/Auth/AuthContext.tsx";
import PageRouter from "./routes/PageRouter.tsx";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./context/Theme/ThemeContext.tsx";
import {ApolloProvider} from "@apollo/client";
import client from "./api/apolloClient.ts";

const App = () => {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <ThemeProvider>
                    <AuthProvider>
                        <PageRouter/>
                    </AuthProvider>
                </ThemeProvider>
            </ApolloProvider>
        </BrowserRouter>
    );
};

export default App;
