import React from 'react';
import { StyledHome } from './style';
import Button from '../../components/Button';

export default () => {
  return (
    <StyledHome>
      <Button
        fontSize={16}
        label="Hello world"
        onClick={() => console.log('onClick')}
      />
      <h3 style={{ padding: '10px 0' }}>
        A lightweight React & Redux boilerplate including:
      </h3>
      <ul style={{ marginTop: 10 }}>
        <li>
          <span role="img" aria-label="create-react-app">
            💻
          </span>{' '}
          <a href="https://facebook.github.io/create-react-app/">
            create-react-app
          </a>
        </li>
        <li>
          <span role="img" aria-label="reach-router">
            ‍{' '}
          </span>{' '}
          <a href="https://reach.tech/router">reach-router</a>
        </li>
        <li>
          <span role="img" aria-label="loader">
            🚀
          </span>{' '}
          <a href="http://gaearon.github.io/react-hot-loader/">
            react-hot-loader
          </a>
        </li>
        <li>
          <a href="https://github.com/reduxjs/redux-starter-kit">
            <span role="img" aria-label="redux">
              🚘
            </span>{' '}
            redux-starter-kit{' '}
          </a>
          <span className="note">
            (redux-thunk bult-in), recommended by{' '}
            <a href="https://twitter.com/acemarke">Redux maintainer</a>
          </span>
        </li>
        <li>
          <a href="https://jaredpalmer.com/formik">
            <span role="img" aria-label="formik">
              ✏️
            </span>{' '}
            formik
          </a>{' '}
          <span className="note">
            (A cool lib for manipulating form in React)
          </span>
        </li>
        <li>
          <a href="https://github.com/jquense/yup">
            <span role="img" aria-label="Yup">
              ✅{' '}
            </span>{' '}
            Yup
          </a>{' '}
          <span className="note">(Form validation library)</span>
        </li>
        <li>
          <a href="https://www.styled-components.com/">
            <span role="img" aria-label="styled">
              🍓
            </span>{' '}
            styled-components{' '}
          </a>
        </li>
      </ul>
    </StyledHome>
  );
};
