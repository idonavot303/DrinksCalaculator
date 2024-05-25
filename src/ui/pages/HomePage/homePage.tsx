import React, { FC } from 'react';
// import s from './homePage.module.scss';

export type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({ ...rest }) => {
  return <div {...rest} />;
};

export default HomePage;
