import React, { FC } from 'react';
import s from './button.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={s.root}>
      {children}
    </button>
  );
};

export default Button;
