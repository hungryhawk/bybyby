import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import * as path from 'path';

export default defineConfig({
    plugins: [react()],
    base: 'bybyby',
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
});
