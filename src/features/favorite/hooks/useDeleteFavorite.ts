import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFavoriteItem } from '../api/fetchFavorites';
import type { FavoriteItem } from '@/entities/favorite/model/favorite.types';

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteFavoriteItem(id),
    onMutate: async (id: string) => {
      const previousFavorites = queryClient.getQueryData<FavoriteItem[]>([
        'favorites',
      ]);

      queryClient.setQueryData<FavoriteItem[]>(['favorites'], (old) => {
        return old?.filter((item) => item.id !== id) ?? [];
      });

      return { previousFavorites };
    },
    onError: (_error, _id, context) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(['favorites'], context.previousFavorites);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
}
