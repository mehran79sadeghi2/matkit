// import {FC} from ''

import { FC, PropsWithChildren } from "react";
import styles from './styles.module.css';

interface PropTypes {
    className?: string;
}

const Button: FC<PropsWithChildren<PropTypes>> = (props) => {
    const { className, children } = props;
    return (
        <button className={`${styles.container} ${className}`}>{children}</button>
    )
}

export default Button