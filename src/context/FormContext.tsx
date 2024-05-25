import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormContextType {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  formData: Record<string, any>;
  updateFormData: (newData: Record<string, any>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const nextStep = () => setCurrentStep(prevStep => prevStep + 1);
  const prevStep = () => setCurrentStep(prevStep => prevStep - 1);

  const updateFormData = (newData: Record<string, any>) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <FormContext.Provider value={{ currentStep, nextStep, prevStep, formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormContextProvider');
  }
  return context;
};
