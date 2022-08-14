module.exports = {
  overwrite: true,
  schema: `${process.env.VITE_API_FINANCE_URL}/graphql`,
  documents: '**/*.(mutation|query).ts',
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
