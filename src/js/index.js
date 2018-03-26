import LoadPageScript from './loadPageScript'

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.location.pathname.split('.')[0]
  LoadPageScript(currentPage).then(({ default: InitView }) => InitView())
})
