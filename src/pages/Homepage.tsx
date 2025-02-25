import {useAuth} from "../context/AuthContext.tsx";

const Homepage = () => {
    const {user} = useAuth();
    return (
        <>
            <div className="text-3xl p-4">Homepage</div>
            {user && <h1>Welcome, {user.username}!</h1>}
        </>
    );
};

export default Homepage;
