import { useQuery } from '@tanstack/react-query';
import { fetchFavorites } from '../api/fetchFavorites';
import type { FavoriteItem } from '@/entities/favorite/model/favorite.types';

export function useFavoritesItems() {
  return useQuery<FavoriteItem[]>({
    queryKey: ['favorites'],
    queryFn: fetchFavorites,
  });
}
