import { useI18n } from '@/app/providers/i18n';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
  const { language, changeLanguage } = useI18n();

  const toggleLanguage = () => {
    changeLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleLanguage}
      aria-label={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
    >
      {language === 'ko' ? 'EN' : 'KO'}
    </button>
  );
}

export default LanguageToggle;
