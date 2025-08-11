
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';

import ProductPage from '../pages/product.f7';
import SettingsPage from '../pages/settings.f7';

import NotFoundPage from '../pages/404.f7';
import DetailPage from '../pages/detail.f7';
import KatalogLagu from '../pages/katalog-lagu.f7';
import FavoritePage from '../pages/favorite.f7';
import SongBook from '../pages/song-book.f7';
import DownloadPage from '../pages/download.f7';
import DownloadDetailPage from '../pages/download-detail.f7';
import RecentPage from '../pages/recent.f7';
var routes = [
  {
    path: '/',
    component: HomePage,  
  },
  {
    path: '/detail/:id/',
    component: DetailPage,
  },
  {
    path: '/songbook/:id/',
    component: SongBook,
  },
  {
      path: '/katalog-lagu/:artis/',
      component: KatalogLagu,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },      {
    path: '/download/',
    component: DownloadPage,
  },
    {
    path: '/download-detail/:id/',
    component: DownloadDetailPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
    {
    path: '/favorite/',
    component: FavoritePage,
  },
      {
    path: '/recent/',
    component: RecentPage,
  },

  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;