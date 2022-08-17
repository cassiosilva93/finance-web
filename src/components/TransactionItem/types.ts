interface TransactionItemProps {
  transaction: {
    id: string;
    type: string;
    title: string;
    date: string;
    value: number;
    category: string;
  };
}

interface RightInfoProps {
  type: string;
}

export type { TransactionItemProps, RightInfoProps };
