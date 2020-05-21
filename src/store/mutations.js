
export default {
  generate_routes(state, routes) {
    state.routes = routes.filter(item => item.meta);
  }
};