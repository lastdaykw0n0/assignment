import styles from './Web3ServiceItem.module.css';
import type { Web3ServiceItem } from '@/entities/web3-service/model/web3Service.types';
import { useTranslation } from 'react-i18next';

type Props = {
  item: Web3ServiceItem;
  onClick: () => void;
};

export function Web3ServiceItem({ item, onClick }: Props) {
  const { i18n } = useTranslation();
  const description = i18n.language.startsWith('ko')
    ? item.desc_kr
    : item.desc_en;

  return (
    <li className={styles.container} onClick={onClick}>
      <div className={styles.iconWrapper}>
        <img
          src={item.icon}
          alt={item.title}
          className={styles.icon}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>

        {description && <p className={styles.description}>{description}</p>}
      </div>
    </li>
  );
}

export default Web3ServiceItem;
