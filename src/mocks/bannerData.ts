import type { Banner } from '@/entities/banner-slider/model/banner.types';

export const mockBanners: Banner[] = [
  {
    id: 'mapo-airdrop',
    image: {
      kr: '/banner/banner_mapo_kr.png',
      en: '/banner/banner_mapo_en.png',
    },
    link: {
      kr: 'https://store-kr.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
      en: 'https://store.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
    },
  },
  {
    id: 'dcent-wallet',
    image: { kr: '/banner/banner_dcent.png', en: '/banner/banner_dcent.png' },
    description: {
      kr: '디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!',
      en: "Enhance your security with D'CENT biometric wallet",
    },
    link: {
      kr: 'https://store-kr.dcentwallet.com',
      en: 'https://store.dcentwallet.com',
    },
    buttonText: { kr: '구매하기', en: 'Buy Now' },
  },
  {
    id: 'dcent-blog',
    image: { kr: '/banner/banner_blog.png', en: '/banner/banner_blog.png' },
    description: {
      kr: '새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!',
      en: 'Visit the new D’CENT Blog to explore the latest updates first!',
    },
    link: {
      kr: 'https://store-kr.dcentwallet.com/blogs/post',
      en: 'https://store.dcentwallet.com/blogs/post',
    },
    buttonText: { kr: '확인하기', en: 'Explore' },
  },
];
