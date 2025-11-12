import { useState, useMemo } from 'react';
import { useI18n } from '@/app/providers/i18n';
import { useWeb3ServicesItems } from '@/features/web3-service/hooks/useWeb3Services';
import { useWeb3ServiceSelection } from '@/features/web3-service/hooks/useWeb3ServiceSelection';
import { filterItemsBySearch } from '@/features/web3-service/lib/filterWeb3Services';
import { Web3ServiceItem } from './Web3ServiceItem';
import { Web3ServiceSkeleton } from './Web3ServiceSkeleton';
import { BottomSheet } from '@/shared/ui/Modal/BottomSheet';
import { SearchBar } from '@/shared/ui/SearchBar/SearchBar';
import { LanguageToggle } from '@/shared/ui/LanguageToggle/LanguageToggle';
import styles from './Web3ServiceList.module.css';

const SKELETON_COUNT = 5;

export function Web3ServiceList() {
  const { language, t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredItems = useMemo(
    () => filterItemsBySearch(items, searchQuery, language),
    [items, searchQuery, language]
  );

  if (isLoading && items.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{t('dapp_list_title')}</h2>
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <Web3ServiceSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <h2 className={styles.title}>{t('dapp_list_title')}</h2>
        <div className={styles.searchContainer}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t('search_placeholder')}
          />
          <LanguageToggle />
        </div>
        <ul className={styles.list}>
          {filteredItems.length > 0 ? (
            <>
              {filteredItems.map((item) => (
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
            </>
          ) : (
            <li className={styles.emptyState}>{t('empty_search_result')}</li>
          )}
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
