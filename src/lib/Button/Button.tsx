
import {
    ButtonHTMLAttributes,
    FC,
    MouseEventHandler,
    PropsWithChildren,
} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<PropsWithChildren<Props>> = ({
    children,
    disabled,
    onClick,
}) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return;
        onClick && onClick(e);
    };

    return (
        <button disabled={disabled} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;