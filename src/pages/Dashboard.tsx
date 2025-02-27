import useTheme from "../context/Theme/useTheme.tsx";

const Dashboard = () => {
    const {isLightMode} = useTheme();
    return (
        <div className="w-full flex justify-center items-center flex-col h-11/12 gap-2">
            <div className={`${isLightMode ? "text-white" : "text-black"}`}>Account dashboard</div>
            <div className="w-1/8">
            </div>
        </div>
    );
};

export default Dashboard;
