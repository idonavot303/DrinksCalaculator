import React, { FC } from 'react';
import s from './textInput.module.scss';

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextInput: FC<TextInputProps> = ({ ...rest }) => {
  return <input {...rest} className={s.root} />;
};

export default TextInput;
