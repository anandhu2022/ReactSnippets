import useTheme from "../context/Theme/useTheme.tsx";
import SliderComponent from "../components/SliderComponent.tsx";

const Homepage = () => {
    const {isLightMode} = useTheme();
    return (
        <div
            className={`${isLightMode ? "text-white bg-black" : "text-black bg-white"} h-full w-full flex flex-col gap-2`}>
            <SliderComponent/>
        </div>
    );
};

export default Homepage;
