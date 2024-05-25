import React, { FC } from 'react';
import s from './stepTwo.module.scss';

export type StepTwoProps = {};

const StepTwo: FC<StepTwoProps> = ({ ...rest }) => {
  return <div {...rest} className={s.root} />;
};

export default StepTwo;
