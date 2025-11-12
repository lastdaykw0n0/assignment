import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { Web3ServiceItem as Web3ServiceItemType } from '@/entities/web3-service/model/web3Service.types';
import { Web3ServiceItem } from './Web3ServiceItem';
import { Web3ServiceSkeleton } from './Web3ServiceSkeleton';
import styles from './Web3ServiceList.module.css';

const SKELETON_COUNT = 5;

interface Web3ServiceVirtualListProps {
  items: Web3ServiceItemType[];
  isFetchingNextPage: boolean;
  bottomObserverRef: React.RefObject<HTMLDivElement | null>;
  onItemClick: (item: Web3ServiceItemType) => void;
  emptyMessage: string;
}

export function Web3ServiceVirtualList({
  items,
  isFetchingNextPage,
  bottomObserverRef,
  onItemClick,
  emptyMessage,
}: Web3ServiceVirtualListProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) {
    return (
      <ul className={styles.list}>
        <li className={styles.emptyState}>{emptyMessage}</li>
      </ul>
    );
  }

  const rowVirtualizer = useVirtualizer({
    count: items.length + (isFetchingNextPage ? SKELETON_COUNT : 0),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
    overscan: 3,
  });

  return (
    <div
      ref={parentRef}
      className={styles.virtualScrollContainer}
      style={{
        height: 'calc(100vh - 250px)',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const isSkeleton = virtualItem.index >= items.length;
          const item = items[virtualItem.index];

          return (
            <div
              key={virtualItem.key}
              data-index={virtualItem.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {isSkeleton ? (
                <Web3ServiceSkeleton />
              ) : (
                <Web3ServiceItem
                  item={item}
                  onClick={() => onItemClick(item)}
                />
              )}
            </div>
          );
        })}
        <div
          ref={bottomObserverRef}
          style={{
            position: 'absolute',
            top: `${rowVirtualizer.getTotalSize()}px`,
            left: 0,
            width: '100%',
            height: '1px',
          }}
        />
      </div>
    </div>
  );
}
