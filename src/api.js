import serverless from 'serverless-http';

import server from './app';

export const handler = serverless(server);
