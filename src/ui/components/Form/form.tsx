import React, { FC } from 'react';
import s from './form.module.scss';

export type FormProps = {
  children: React.ReactNode;
};

const Form: FC<FormProps> = ({ children, ...rest }) => {
  return (
    <form {...rest} className={s.root}>
      {children}
    </form>
  );
};

export default Form;
