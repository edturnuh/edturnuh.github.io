import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from '../sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'edturnuh.com',
  projectId: '7c6srrx7',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
