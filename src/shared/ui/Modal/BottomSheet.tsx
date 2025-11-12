import React from 'react';
import styles from './BottomSheet.module.css';
import type { Nullable } from '@/shared/types';
import { useI18n } from '@/app/providers/i18n';

interface BottomSheetProps {
  open: boolean;
  title: string;
  subtitle?: string;
  url?: string;
  description?: Nullable<string>;
  imageUrl?: string;
  onClose: () => void;
  onGo?: () => void;
}

/**
 * @description 바텀씻 컴포넌트(web3ServiceItem에 종속적인)
 */
export const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  title,
  subtitle,
  url,
  description,
  imageUrl,
  onClose,
  onGo,
}) => {
  const { t } = useI18n();

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className={styles.icon}
              loading="lazy"
            />
          )}
          <div className={styles.textGroup}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.url}
              >
                {url}
              </a>
            )}
          </div>
        </div>

        {description && (
          <div className={styles.descriptionBox}>
            <h3 className={styles.sectionTitle}>{t('description')}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        )}

        <button className={styles.goButton} onClick={onGo}>
          {t('go_to_dapp')}
        </button>
      </div>
    </div>
  );
};
