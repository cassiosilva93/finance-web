interface TransactionItemProps {
  transaction: {
    type: string;
    title: string;
    date: string;
    value: number;
  };
}

interface RightInfoProps {
  type: string;
}

export type { TransactionItemProps, RightInfoProps };
