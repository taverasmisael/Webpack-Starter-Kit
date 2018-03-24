// @flow
const LoadPageScript = (page: string): Promise<any> => {
  const currentPage = page === '/index' || page === '/' ? '/home' : page
  switch (currentPage) {
  case '/home':
    return import(/* webpackChunkName: "home" */ './pages/home')
  case '/about':
    return import(/* webpackChunkName: "about" */ './pages/about')
  case '/contacts':
    return import(/* webpackChunkName: "contacts" */ './pages/contacts')
  default:
    return import(/* webpackChunkName: "404" */ './pages/404')
  }
}

export default LoadPageScript
