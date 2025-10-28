export default {
  register({ strapi }) {
    // Ruta raíz para mostrar algo rápido
    strapi.server.routes([
      {
        method: 'GET',
        path: '/',
        handler: async (ctx) => {
          ctx.body = '🚀 Strapi está funcionando correctamente en topo';
        },
        config: {
          auth: false,
        },
      },
    ]);
  },
  bootstrap() {},
};