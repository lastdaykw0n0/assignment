import type { FavoriteItem } from '@/entities/favorite/model/favorite.types';
import { getMockFavorites, deleteMockFavorite } from '@/mocks/favoriteData';
import { apiFetch } from '@/shared/api/client';

const API_URL = '/api/favorites';
const USE_MOCK = import.meta.env.MODE === 'development';

export async function fetchFavorites(): Promise<FavoriteItem[]> {
  if (USE_MOCK) {
    return apiFetch(API_URL, getMockFavorites());
  }

  return apiFetch(API_URL);
}

export function deleteFavoriteItem(id: string): Promise<void> {
  if (USE_MOCK) {
    // 개발 환경인 경우만 mock 데이터 삭제, 새로고침 시 원상복구
    deleteMockFavorite(id);
    return Promise.resolve();
  }

  return apiFetch(`${API_URL}/${id}`);
}
