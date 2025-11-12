import { useState } from 'react';
import { useFavoritesItems } from './useFavoriteItems';
import { useDeleteFavorite } from './useDeleteFavorite';
import type { Nullable } from '@/shared/types';

export function useFavorite() {
  const { data, isLoading, error, refetch } = useFavoritesItems();
  const deleteMutation = useDeleteFavorite();

  const [selectedId, setSelectedId] = useState<Nullable<string>>(null);

  return {
    data,
    isLoading,
    error,
    refetch,
    selectedId,
    openConfirm: (id: string) => setSelectedId(id),
    closeConfirm: () => setSelectedId(null),
    confirmDelete: () => {
      if (!selectedId) return;
      deleteMutation.mutate(selectedId);
      setSelectedId(null);
    },
  };
}
