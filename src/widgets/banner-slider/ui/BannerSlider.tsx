import styles from './BannerSlider.module.css';
import { useBanners } from '@/entities/banner-slider/model/useBanners';
import { openLink } from '@/shared/utils/openLink';
import { useI18n } from '@/app/providers/i18n';
import { OptimizedImage } from '@/shared/ui/OptimizedImage';

export default function BannerSlider() {
  const { data: banners, isLoading } = useBanners();
  const { language } = useI18n();
  const lang = language === 'ko' ? 'kr' : 'en';

  if (isLoading) return <div>Loading...</div>;
  if (!banners || banners.length === 0) return null;

  return (
    <div className={styles.bannerSlider}>
      {banners.map((banner, idx) => (
        <div
          key={banner.id}
          className={styles.bannerItem}
          onClick={() => openLink(banner.link[lang])}
        >
          <OptimizedImage
            src={banner.image[lang]}
            alt={banner.description?.[lang] ?? ''}
            className={styles.bannerImage}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
          <div className={styles.bannerIndex}>
            {idx + 1} / {banners.length}
          </div>
          {banner.description && <p>{banner.description[lang]}</p>}
          {banner.buttonText && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                openLink(banner.link[lang]);
              }}
            >
              {banner.buttonText[lang]}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
