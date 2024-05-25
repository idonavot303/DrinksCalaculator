import React, { FC } from 'react';
import s from './stepThree.module.scss';

export type StepThreeProps = {};

const StepThree: FC<StepThreeProps> = ({ ...rest }) => {
  return <div {...rest} className={s.root} />;
};

export default StepThree;
