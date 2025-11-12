import { useFavorite } from '@/features/favorite/hooks/useFavorite';
import { FavoriteItem } from './FavoriteItem.tsx';
import ConfirmModal from '@/shared/ui/Modal/ConfirmModal.tsx';
import { useI18n } from '@/app/providers/i18n';
import styles from './FavoriteList.module.css';

const FavoriteList = () => {
  const {
    data,
    isLoading,
    error,
    refetch,
    selectedId,
    openConfirm,
    closeConfirm,
    confirmDelete,
  } = useFavorite();
  const { t } = useI18n();

  if (error) {
    return (
      <>
        <h2 className={styles.title}>{t('dapp_favorite_title')}</h2>
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{t('error_loading')}</p>
          <button className={styles.retryButton} onClick={() => refetch()}>
            {t('error_retry')}
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className={styles.title}>{t('dapp_favorite_title')}</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map((item) => (
            <FavoriteItem
              key={item.id}
              item={item}
              onDeleteClick={() => openConfirm(item.id)}
            />
          ))}
        </ul>
      )}
      {selectedId && (
        <ConfirmModal
          title={t('delete_confirm_title')}
          message={t('delete_confirm_message')}
          confirmText={t('dapp_favorite_delete')}
          cancelText={t('button_cancel')}
          onConfirm={confirmDelete}
          onCancel={closeConfirm}
        />
      )}
    </>
  );
};

export default FavoriteList;
