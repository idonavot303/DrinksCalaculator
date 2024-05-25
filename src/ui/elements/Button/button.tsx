import React, { FC } from 'react';
import s from './button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={s.root}>
      {children}
    </button>
  );
};

export default Button;
