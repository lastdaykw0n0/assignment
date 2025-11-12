import type { FavoriteItem } from '@/entities/favorite/model/favorite.types';

const initialMockFavorites: FavoriteItem[] = [
  {
    id: '1',
    title: 'OpenSea, the largest NFT marketplace',
    icon: '/icons/icon_opensea.png',
    url: 'https://opensea.io',
  },
  {
    id: '2',
    title: 'MoonPay',
    icon: '/icons/icon_moonpay.png',
    url: 'https://buy.moonpay.com/v2/buy',
  },
  {
    id: '3',
    title: 'Rarible - NFT Marketplace for Brands, Communities and Traders',
    icon: '/icons/icon_rarible.png',
    url: 'https://rarible.com/',
  },
];

let mockFavorites: FavoriteItem[] = [...initialMockFavorites];

export function getMockFavorites(): FavoriteItem[] {
  return [...mockFavorites];
}

export function deleteMockFavorite(id: string): void {
  mockFavorites = mockFavorites.filter((item) => item.id !== id);
}
export { mockFavorites };
