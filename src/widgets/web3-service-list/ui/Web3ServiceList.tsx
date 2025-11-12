import { useWeb3ServicesItems } from '@/features/web3-service/hooks/useWeb3Services';
import { useWeb3ServiceSelection } from '@/features/web3-service/hooks/useWeb3ServiceSelection';
import { Web3ServiceItem } from './Web3ServiceItem';
import { Web3ServiceSkeleton } from './Web3ServiceSkeleton';
import { BottomSheet } from '@/shared/ui/Modal/BottomSheet';
import styles from './Web3ServiceList.module.css';

const SKELETON_COUNT = 5;

export function Web3ServiceList() {
  const { items, isLoading, isFetchingNextPage, bottomObserverRef } =
    useWeb3ServicesItems();

  const {
    selectedItem,
    selectItem,
    clearSelection,
    handleGoClick,
    description,
    isOpen,
  } = useWeb3ServiceSelection();

  if (isLoading && items.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>목록</h2>
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <Web3ServiceSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <h2 className={styles.title}>목록</h2>
        <ul className={styles.list}>
          {items.map((item) => (
            <Web3ServiceItem
              key={item.id}
              item={item}
              onClick={() => selectItem(item)}
            />
          ))}
          {isFetchingNextPage &&
            Array.from({ length: SKELETON_COUNT }).map((_, index) => (
              <Web3ServiceSkeleton key={`skeleton-${index}`} />
            ))}
          <div ref={bottomObserverRef} style={{ height: '1px' }} />
        </ul>
      </div>

      <BottomSheet
        open={isOpen}
        title={selectedItem?.title || ''}
        subtitle={selectedItem?.network}
        url={selectedItem?.url}
        description={description}
        imageUrl={selectedItem?.icon}
        onClose={clearSelection}
        onGo={handleGoClick}
      />
    </div>
  );
}

export default Web3ServiceList;
