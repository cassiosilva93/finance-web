import { ValueHelper } from '@src/helpers/ValueHelper';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { Container, Header } from './style';

interface BoxSummaryContentProps {
  title: string;
  value: number;
  color: string;
  icon: IconType;
}

export default function BoxSummary({
  title,
  value,
  color,
  icon,
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

      <h1>{ValueHelper.formatToBRLCurrency(value)}</h1>
    </Container>
  );
}
