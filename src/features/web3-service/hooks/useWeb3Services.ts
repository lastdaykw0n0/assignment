import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchWeb3Services } from '../api/fetchWeb3Services';
import type { Web3ServiceItem } from '@/entities/web3-service/model/web3Service.types';
import { getCurrentLanguage } from '../lib/filterWeb3Services';
import { i18n } from '@/app/providers/i18n';

export interface UseWeb3ServicesOptions {
  pageSize?: number;
  enableInfiniteScroll?: boolean;
}

const DEFAULT_PAGE_SIZE = 3;

export function useWeb3Services(options: UseWeb3ServicesOptions = {}) {
  const { pageSize = DEFAULT_PAGE_SIZE } = options;

  return useInfiniteQuery({
    queryKey: ['web3-services', getCurrentLanguage(), i18n.language, pageSize],
    queryFn: ({ pageParam = 1 }) =>
      fetchWeb3Services({ page: pageParam, pageSize }),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.hasMore) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export function useWeb3ServicesItems(options: UseWeb3ServicesOptions = {}): {
  items: Web3ServiceItem[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  bottomObserverRef: React.RefObject<HTMLDivElement | null>;
} {
  const { enableInfiniteScroll = true, ...queryOptions } = options;

  const query = useWeb3Services(queryOptions);

  const items = query.data?.pages.flatMap((page) => page.items) ?? [];
  const hasNextPage = query.hasNextPage ?? false;
  const isFetchingNextPage = query.isFetchingNextPage;
  const fetchNextPage = query.fetchNextPage;

  const bottomObserverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableInfiniteScroll || !hasNextPage || isFetchingNextPage) {
      return;
    }

    const bottomObserver = bottomObserverRef.current;
    if (!bottomObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        rootMargin: '20px',
      }
    );

    observer.observe(bottomObserver);

    return () => {
      observer.disconnect();
    };
  }, [enableInfiniteScroll, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    items,
    isLoading: query.isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    bottomObserverRef,
  };
}
