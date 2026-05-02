import { IRoutes } from "../interfaces/IRoutes"

const baseUrl: string = import.meta.env.VITE_BASE_PAGES || '/'

const routes: IRoutes = {
  home: `/index.html`,
  about: `/about.html`,
  gallery: `/gallery.html`,
  services: `/services.html`,
  contact: `/contact.html`,
}

export default routes
