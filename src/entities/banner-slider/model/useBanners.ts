import { useQuery } from '@tanstack/react-query';
import { fetchBanners } from '@/entities/banner-slider/lib/fetchBanners';

export const useBanners = () => {
  return useQuery({ queryKey: ['banners'], queryFn: fetchBanners });
};
