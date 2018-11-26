// @flow
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
      <div>
        {
          'lightweight React boilerplate includes: styled-component, code splitting, redux etc.'
        }
      </div>
    </StyledHome>
  );
};
