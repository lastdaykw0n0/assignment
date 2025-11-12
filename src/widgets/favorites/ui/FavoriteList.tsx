import { useFavorite } from '@/features/favorite/hooks/useFavorite';
import { FavoriteItem } from './FavoriteItem.tsx';
import ConfirmModal from '@/shared/ui/Modal/ConfirmModal.tsx';
import { useI18n } from '@/app/providers/i18n';
import styles from './FavoriteList.module.css';

const FavoriteList = () => {
  const { data, selectedId, openConfirm, closeConfirm, confirmDelete } =
    useFavorite();
  const { t } = useI18n();

  return (
    <>
      <h2 className={styles.title}>{t('dapp_favorite_title')}</h2>
      <ul>
        {data?.map((item) => (
          <FavoriteItem
            key={item.id}
            item={item}
            onDeleteClick={() => openConfirm(item.id)}
          />
        ))}
      </ul>
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
