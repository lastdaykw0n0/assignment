import type { Web3ServiceItem } from '@/entities/web3-service/model/web3Service.types';
import { i18n } from '@/app/providers/i18n';
import type { Nullable } from '@/shared/types';

/**
 * 플랫폼 감지 (Android 또는 iPhone)
 */
export function detectPlatform(): Nullable<'android' | 'iphone'> {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/android/.test(userAgent)) {
    return 'android';
  }
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'iphone';
  }

  return null;
}

/**
 * 현재 언어 감지
 * TODO: 언어 설정 관련 로직 추가
 */
export function getCurrentLanguage(): 'ko' | 'en' {
  const language =
    (i18n.language && i18n.language !== 'undefined' ? i18n.language : null) ||
    navigator.language ||
    'en';

  return language.startsWith('ko') ? 'ko' : 'en';
}

/**
 * 현재 빌드환경
 */
export function getCurrentEnv(): 'dev' | 'stage' | 'prod' {
  switch (import.meta.env.MODE) {
    case 'development':
      return 'dev';
    case 'production':
      return 'prod';
    case 'stage':
      return 'stage';
    default:
      return 'prod';
  }
}

export function shouldShowService(
  service: Web3ServiceItem,
  language: 'ko' | 'en',
  platform: Nullable<'android' | 'iphone'>,
  env: 'dev' | 'stage' | 'prod'
): boolean {
  if (!service.show_condition) {
    return true;
  }

  const conditions = service.show_condition;

  // 언어 조건 확인 ('kr'은 'ko'로 매핑)
  if (conditions.lang && conditions.lang.length > 0) {
    const languageMatches = conditions.lang.some((lang) => {
      if (lang === 'kr' || lang === 'ko') {
        return language === 'ko';
      }
      if (lang === 'en') {
        return language === 'en';
      }
      return false;
    });
    if (!languageMatches) return false;
  }

  // 플랫폼 조건 확인
  if (conditions.platform && conditions.platform.length > 0) {
    const platformMatches = conditions.platform.some((p) => p === platform);
    if (!platformMatches) return false;
  }

  // 빌드환경 조건 확인
  if (conditions.env && conditions.env.length > 0) {
    const envMatches = conditions.env.some((e) => e === env);
    if (!envMatches) return false;
  }

  return true;
}

/**
 * 언어, 플랫폼, 빌드환경 조건 확인하여 서비스 필터링
 */
export function filterWeb3Services(
  services: Web3ServiceItem[]
): Web3ServiceItem[] {
  const language = getCurrentLanguage();
  const platform = detectPlatform();
  const env = getCurrentEnv();

  return services.filter((service) =>
    shouldShowService(service, language, platform, env)
  );
}

/**
 * 사용자 검색어로 서비스 필터링
 */ export function filterItemsBySearch(
  items: Web3ServiceItem[],
  searchQuery: string,
  language: string
): Web3ServiceItem[] {
  if (!searchQuery.trim()) {
    return items;
  }

  const query = searchQuery.toLowerCase().trim();

  return items.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(query);

    const description = language.startsWith('ko') ? item.desc_kr : item.desc_en;
    const descriptionMatch = description
      ? description.toLowerCase().includes(query)
      : false;

    return titleMatch || descriptionMatch;
  });
}
