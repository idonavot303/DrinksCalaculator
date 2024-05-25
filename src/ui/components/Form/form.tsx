import React, { FC } from 'react';
import s from './form.module.scss';
import { useForm } from '../../../context/FormContext';
import TextInput from '../../elements/FormInputs/TextInput';
import Button from '../../elements/Button';

export type FormProps = {};

const Form: FC<FormProps> = ({ ...rest }) => {
  const { currentStep, nextStep, prevStep } = useForm();
  return (
    <form {...rest} className={s.root} onSubmit={(e) => e.preventDefault()}>
      <h2>{currentStep}</h2>
      <TextInput />
      <TextInput />
      <TextInput />
      <Button onClick={nextStep}>Next</Button>
      <Button onClick={prevStep}>Prev</Button>
    </form>
  );
};

export default Form;
