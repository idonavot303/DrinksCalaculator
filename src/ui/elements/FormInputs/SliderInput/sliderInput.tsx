import React, { FC } from 'react';
import s from './sliderInput.module.scss';

export type SliderInputProps = {};

const SliderInput: FC<SliderInputProps> = ({ ...rest }) => {
  return <input {...rest} className={s.root} />;
};

export default SliderInput;
