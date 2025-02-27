import {ButtonProps} from "../../libraries/utils/types.ts";
import useTheme from "../../context/Theme/useTheme.tsx";

const Button = ({name, logout}: ButtonProps) => {
    const {isLightMode} = useTheme();
    return (
        <button
            className={`px-3 py-2 rounded-xl border 
            ${isLightMode ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"} cursor-pointer  w-full`}
            onClick={logout}>
            {name}
        </button>
    );
};

export default Button;
