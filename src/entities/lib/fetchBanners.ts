import type { Banner } from '@/entities/model/banner.types';
import { apiFetch } from '../../shared/api/client';
import { mockBanners } from '@/mocks/bannerData';

export const fetchBanners = async () => {
  return apiFetch<Banner[]>('/banners', mockBanners);
};
