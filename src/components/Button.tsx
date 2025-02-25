import {ButtonProps} from "../libraries/utils/types.ts";

const Button = ({name, handleClick}: ButtonProps) => {
    return (
        <button
            className="px-3 py-2 rounded-xl border border-black text-black cursor-pointer hover:bg-black hover:text-white min-w-1/20"
            onClick={handleClick}>
            {name}
        </button>
    );
};

export default Button;
