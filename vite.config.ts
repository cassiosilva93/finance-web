import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import codegen from 'vite-plugin-graphql-codegen';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), codegen()],
});
