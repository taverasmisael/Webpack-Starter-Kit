import LoadPageScript from './loadPageScript'

const currentPage = document.location.pathname.split('.')[0]
document.addEventListener('DOMContentLoaded', () => {
  LoadPageScript(currentPage).then(({ default: InitView }) => InitView())
})
