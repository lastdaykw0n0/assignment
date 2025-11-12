import { useFavorite } from '@/features/favorite/hooks/useFavorite';
import { FavoriteItem } from './FavoriteItem.tsx';
import ConfirmModal from '@/shared/ui/Modal/ConfirmModal.tsx';
import styles from './FavoriteList.module.css';

const FavoriteList = () => {
  const { data, selectedId, openConfirm, closeConfirm, confirmDelete } =
    useFavorite();

  return (
    <>
      <h2 className={styles.title}>즐겨찾기</h2>
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
          title="삭제 확인"
          message="정말 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={confirmDelete}
          onCancel={closeConfirm}
        />
      )}
    </>
  );
};

export default FavoriteList;
