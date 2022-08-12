import { ValueHelper } from '@src/helpers/ValueHelper';
import React from 'react';
import { Container, Header, Value } from './style';
import { BoxSummaryContentProps } from './types';

export default function BoxSummary({
  title,
  value,
  color,
  icon,
  changeColor,
}: BoxSummaryContentProps) {
  return (
    <Container>
      <Header>
        <p>{title}</p>

        {React.createElement(icon, {
          size: 25,
          color,
        })}
      </Header>

      <Value changeColor={changeColor} value={value}>
        {ValueHelper.formatToBRLCurrency(value)}
      </Value>
    </Container>
  );
}
