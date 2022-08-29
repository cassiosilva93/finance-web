import { ValueHelper } from '@src/helpers/ValueHelper';
import { Container, Header, Value } from './style';
import { BoxSummaryContentProps } from './types';

export default function BoxSummary({
  title,
  value,
  color,
  icon: Icon,
  changeColor,
}: BoxSummaryContentProps) {
  return (
    <Container>
      <Header>
        <p>{title}</p>
        {Icon && <Icon size={25} color={color} />}
      </Header>

      <Value changeColor={changeColor} value={value}>
        {ValueHelper.formatToBRLCurrency(value)}
      </Value>
    </Container>
  );
}
