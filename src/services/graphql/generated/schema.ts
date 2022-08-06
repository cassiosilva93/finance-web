import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTransaction: Transaction;
  createUser: User;
  deleteTransaction: Scalars['Boolean'];
  updateTransaction?: Maybe<Transaction>;
};


export type MutationCreateTransactionArgs = {
  data: TransactionInput;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationDeleteTransactionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTransactionArgs = {
  data?: InputMaybe<TransactionInput>;
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getTransaction?: Maybe<Transaction>;
  getTransactions: Array<Maybe<Transaction>>;
  login?: Maybe<Scalars['String']>;
};


export type QueryGetTransactionArgs = {
  id: Scalars['String'];
};


export type QueryLoginArgs = {
  data?: InputMaybe<UserLoginInput>;
};

export type Transaction = {
  __typename?: 'Transaction';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['Float']>;
};

export type TransactionInput = {
  category?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['Date']>;
};

export type UserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateNewTransactionMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<Scalars['String']>;
}>;


export type CreateNewTransactionMutation = { __typename?: 'Mutation', createTransaction: { __typename?: 'Transaction', id?: string | null } };

export type GetAllTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTransactionsQuery = { __typename?: 'Query', getTransactions: Array<{ __typename?: 'Transaction', id?: string | null, type?: string | null, title?: string | null, created_at?: any | null, value?: number | null } | null> };


export const CreateNewTransactionDocument = gql`
    mutation CreateNewTransaction($title: String, $type: String, $value: Float, $category: String) {
  createTransaction(
    data: {title: $title, type: $type, value: $value, category: $category}
  ) {
    id
  }
}
    `;
export type CreateNewTransactionMutationFn = Apollo.MutationFunction<CreateNewTransactionMutation, CreateNewTransactionMutationVariables>;

/**
 * __useCreateNewTransactionMutation__
 *
 * To run a mutation, you first call `useCreateNewTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewTransactionMutation, { data, loading, error }] = useCreateNewTransactionMutation({
 *   variables: {
 *      title: // value for 'title'
 *      type: // value for 'type'
 *      value: // value for 'value'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCreateNewTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewTransactionMutation, CreateNewTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewTransactionMutation, CreateNewTransactionMutationVariables>(CreateNewTransactionDocument, options);
      }
export type CreateNewTransactionMutationHookResult = ReturnType<typeof useCreateNewTransactionMutation>;
export type CreateNewTransactionMutationResult = Apollo.MutationResult<CreateNewTransactionMutation>;
export type CreateNewTransactionMutationOptions = Apollo.BaseMutationOptions<CreateNewTransactionMutation, CreateNewTransactionMutationVariables>;
export const GetAllTransactionsDocument = gql`
    query GetAllTransactions {
  getTransactions {
    id
    type
    title
    created_at
    value
  }
}
    `;

/**
 * __useGetAllTransactionsQuery__
 *
 * To run a query within a React component, call `useGetAllTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>(GetAllTransactionsDocument, options);
      }
export function useGetAllTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>(GetAllTransactionsDocument, options);
        }
export type GetAllTransactionsQueryHookResult = ReturnType<typeof useGetAllTransactionsQuery>;
export type GetAllTransactionsLazyQueryHookResult = ReturnType<typeof useGetAllTransactionsLazyQuery>;
export type GetAllTransactionsQueryResult = Apollo.QueryResult<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>;