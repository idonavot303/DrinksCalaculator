import React, { FC, useMemo } from 'react';
import s from './form.module.scss';
import { useForm } from '../../../context/FormContext';
import Button from '../../elements/Button';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export type FormProps = {};

const Form: FC<FormProps> = ({ ...rest }) => {
  const { currentStep, nextStep, prevStep } = useForm();

  const step = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return 1;
    }
  }, [currentStep]);
  return (
    <form {...rest} className={s.root} onSubmit={(e) => e.preventDefault()}>
      <h2>{currentStep}</h2>
      {step}
      <Button onClick={nextStep}>Next</Button>
      <Button onClick={prevStep}>Prev</Button>
    </form>
  );
};

export default Form;
