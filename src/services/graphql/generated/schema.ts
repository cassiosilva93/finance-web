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

export type ConsolidedValues = {
  __typename?: 'ConsolidedValues';
  lastTransactionRegistered?: Maybe<Scalars['Date']>;
  totalIncome?: Maybe<Scalars['Float']>;
  totalOutcome?: Maybe<Scalars['Float']>;
  totalTransactionRegister?: Maybe<Scalars['Int']>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserLoginOutput>;
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
  getConsolidedValues?: Maybe<ConsolidedValues>;
  getTransaction?: Maybe<Transaction>;
  getTransactions: Array<Maybe<Transaction>>;
  login?: Maybe<LoginOutput>;
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

export type UserLoginOutput = {
  __typename?: 'UserLoginOutput';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DeleteTransactionMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteTransactionMutation = { __typename?: 'Mutation', deleteTransaction: boolean };

export type CreateNewTransactionMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<Scalars['String']>;
}>;


export type CreateNewTransactionMutation = { __typename?: 'Mutation', createTransaction: { __typename?: 'Transaction', id?: string | null } };

export type UpdateTransactionMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<TransactionInput>;
}>;


export type UpdateTransactionMutation = { __typename?: 'Mutation', updateTransaction?: { __typename?: 'Transaction', id?: string | null } | null };

export type LoginQueryVariables = Exact<{
  data?: InputMaybe<UserLoginInput>;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'LoginOutput', token?: string | null, user?: { __typename?: 'UserLoginOutput', id?: string | null, name?: string | null, email?: string | null } | null } | null };

export type GetBoxSummaryInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoxSummaryInfoQuery = { __typename?: 'Query', getConsolidedValues?: { __typename?: 'ConsolidedValues', totalIncome?: number | null, totalOutcome?: number | null } | null };

export type CreateNewUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateNewUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id?: string | null } };

export type GetAllTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTransactionsQuery = { __typename?: 'Query', getTransactions: Array<{ __typename?: 'Transaction', id?: string | null, type?: string | null, title?: string | null, created_at?: any | null, value?: number | null, category?: string | null } | null> };

export type GetTransactionInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionInfoQuery = { __typename?: 'Query', getConsolidedValues?: { __typename?: 'ConsolidedValues', lastTransactionRegistered?: any | null, totalTransactionRegister?: number | null } | null };


export const DeleteTransactionDocument = gql`
    mutation DeleteTransaction($id: String) {
  deleteTransaction(id: $id)
}
    `;
export type DeleteTransactionMutationFn = Apollo.MutationFunction<DeleteTransactionMutation, DeleteTransactionMutationVariables>;

/**
 * __useDeleteTransactionMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionMutation, { data, loading, error }] = useDeleteTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTransactionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTransactionMutation, DeleteTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTransactionMutation, DeleteTransactionMutationVariables>(DeleteTransactionDocument, options);
      }
export type DeleteTransactionMutationHookResult = ReturnType<typeof useDeleteTransactionMutation>;
export type DeleteTransactionMutationResult = Apollo.MutationResult<DeleteTransactionMutation>;
export type DeleteTransactionMutationOptions = Apollo.BaseMutationOptions<DeleteTransactionMutation, DeleteTransactionMutationVariables>;
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
export const UpdateTransactionDocument = gql`
    mutation UpdateTransaction($id: String, $data: TransactionInput) {
  updateTransaction(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateTransactionMutationFn = Apollo.MutationFunction<UpdateTransactionMutation, UpdateTransactionMutationVariables>;

/**
 * __useUpdateTransactionMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionMutation, { data, loading, error }] = useUpdateTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument, options);
      }
export type UpdateTransactionMutationHookResult = ReturnType<typeof useUpdateTransactionMutation>;
export type UpdateTransactionMutationResult = Apollo.MutationResult<UpdateTransactionMutation>;
export type UpdateTransactionMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
export const LoginDocument = gql`
    query Login($data: UserLoginInput) {
  login(data: $data) {
    token
    user {
      id
      name
      email
    }
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginQuery(baseOptions?: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const GetBoxSummaryInfoDocument = gql`
    query GetBoxSummaryInfo {
  getConsolidedValues {
    totalIncome
    totalOutcome
  }
}
    `;

/**
 * __useGetBoxSummaryInfoQuery__
 *
 * To run a query within a React component, call `useGetBoxSummaryInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoxSummaryInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoxSummaryInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoxSummaryInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetBoxSummaryInfoQuery, GetBoxSummaryInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoxSummaryInfoQuery, GetBoxSummaryInfoQueryVariables>(GetBoxSummaryInfoDocument, options);
      }
export function useGetBoxSummaryInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoxSummaryInfoQuery, GetBoxSummaryInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoxSummaryInfoQuery, GetBoxSummaryInfoQueryVariables>(GetBoxSummaryInfoDocument, options);
        }
export type GetBoxSummaryInfoQueryHookResult = ReturnType<typeof useGetBoxSummaryInfoQuery>;
export type GetBoxSummaryInfoLazyQueryHookResult = ReturnType<typeof useGetBoxSummaryInfoLazyQuery>;
export type GetBoxSummaryInfoQueryResult = Apollo.QueryResult<GetBoxSummaryInfoQuery, GetBoxSummaryInfoQueryVariables>;
export const CreateNewUserDocument = gql`
    mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
  createUser(data: {name: $name, email: $email, password: $password}) {
    id
  }
}
    `;
export type CreateNewUserMutationFn = Apollo.MutationFunction<CreateNewUserMutation, CreateNewUserMutationVariables>;

/**
 * __useCreateNewUserMutation__
 *
 * To run a mutation, you first call `useCreateNewUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewUserMutation, { data, loading, error }] = useCreateNewUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateNewUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewUserMutation, CreateNewUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewUserMutation, CreateNewUserMutationVariables>(CreateNewUserDocument, options);
      }
export type CreateNewUserMutationHookResult = ReturnType<typeof useCreateNewUserMutation>;
export type CreateNewUserMutationResult = Apollo.MutationResult<CreateNewUserMutation>;
export type CreateNewUserMutationOptions = Apollo.BaseMutationOptions<CreateNewUserMutation, CreateNewUserMutationVariables>;
export const GetAllTransactionsDocument = gql`
    query GetAllTransactions {
  getTransactions {
    id
    type
    title
    created_at
    value
    category
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
export const GetTransactionInfoDocument = gql`
    query GetTransactionInfo {
  getConsolidedValues {
    lastTransactionRegistered
    totalTransactionRegister
  }
}
    `;

/**
 * __useGetTransactionInfoQuery__
 *
 * To run a query within a React component, call `useGetTransactionInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransactionInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionInfoQuery, GetTransactionInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionInfoQuery, GetTransactionInfoQueryVariables>(GetTransactionInfoDocument, options);
      }
export function useGetTransactionInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionInfoQuery, GetTransactionInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionInfoQuery, GetTransactionInfoQueryVariables>(GetTransactionInfoDocument, options);
        }
export type GetTransactionInfoQueryHookResult = ReturnType<typeof useGetTransactionInfoQuery>;
export type GetTransactionInfoLazyQueryHookResult = ReturnType<typeof useGetTransactionInfoLazyQuery>;
export type GetTransactionInfoQueryResult = Apollo.QueryResult<GetTransactionInfoQuery, GetTransactionInfoQueryVariables>;