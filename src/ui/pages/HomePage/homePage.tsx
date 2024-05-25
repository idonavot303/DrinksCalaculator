import React, { FC } from 'react';
import Form from '../../components/Form';
// import s from './homePage.module.scss';

export type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h1>Home Page</h1>
      <Form />
    </div>
  );
};

export default HomePage;
