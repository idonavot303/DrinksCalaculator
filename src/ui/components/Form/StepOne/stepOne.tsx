import React, { FC } from 'react';
import s from './stepOne.module.scss';
import TextInput from '../../../elements/FormInputs/TextInput';

export type StepOneProps = {};

const StepOne: FC<StepOneProps> = ({ ...rest }) => {
  return (
    <div {...rest} className={s.root}>
      <TextInput />
      <TextInput />
      <TextInput />
    </div>
  );
};

export default StepOne;
