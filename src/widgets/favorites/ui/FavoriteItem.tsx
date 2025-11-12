import styles from './FavoriteItem.module.css';
import type { FavoriteItem } from '@/entities/favorite/model/favorite.types';
import { useI18n } from '@/app/providers/i18n';

type Props = {
  item: FavoriteItem;
  onDeleteClick: () => void;
};

export function FavoriteItem({ item, onDeleteClick }: Props) {
  const { t } = useI18n();

  return (
    <li className={styles.container}>
      <div className={styles.info}>
        <img
          src={item.icon}
          alt={item.title}
          className={styles.icon}
          loading="lazy"
        />

        <div className={styles.textWrapper}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.url}>{item.url}</p>
        </div>
      </div>

      <div className={styles.action}>
        <button className={styles.deleteButton} onClick={onDeleteClick}>
          {t('dapp_favorite_delete')}
        </button>
      </div>
    </li>
  );
}

export default FavoriteItem;
