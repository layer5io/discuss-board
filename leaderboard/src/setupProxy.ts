import { createProxyMiddleware } from 'http-proxy-middleware';
import { BASE_URL } from './lib/axios';

const proxy = (app: any) => {
  app.use(
    '/discuss',
    createProxyMiddleware({
      target: `${BASE_URL}`,
      changeOrigin: true,
    })
  );
};

// 
export default proxy;
