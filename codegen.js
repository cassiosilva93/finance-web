module.exports = {
  overwrite: true,
  schema: `${process.env.VITE_API_FINANCE_URL}/graphql`,
  documents: '**/*.{gql,graphql}',
  generates: {
    'src/services/graphql/generated/schema.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      './graphql.schema.json': {
        plugins: ['introspection'],
      },
    },
  },
};

console.log(process.env.VITE_API_FINANCE_URL);
