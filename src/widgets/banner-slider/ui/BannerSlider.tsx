import styles from './BannerSlider.module.css';
import { useBanners } from '@/entities/model/useBanners';
import { openLink } from '@/shared/utils/openLink';

/* TODO: lang을 context로 주입 */
const LANG = 'kr';

export default function BannerSlider() {
  const { data: banners, isLoading } = useBanners();

  if (isLoading) return <div>Loading...</div>;
  if (!banners || banners.length === 0) return null;

  return (
    <div className={styles.bannerSlider}>
      {banners.map((banner, idx) => (
        <div
          key={banner.id}
          className={styles.bannerItem}
          onClick={() => openLink(banner.link[LANG])}
        >
          <img
            src={banner.image[LANG]}
            alt={banner.description?.[LANG] ?? ''}
            className={styles.bannerImage}
          />
          <div className={styles.bannerIndex}>
            {idx + 1} / {banners.length}
          </div>
          {banner.description && <p>{banner.description[LANG]}</p>}
          {banner.buttonText && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                openLink(banner.link[LANG]);
              }}
            >
              {banner.buttonText[LANG]}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
