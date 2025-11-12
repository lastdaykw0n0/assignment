import type { Nullable } from '@/shared/types';

export interface ShowCondition {
  lang?: ('ko' | 'kr' | 'en')[];
  platform?: Nullable<'android' | 'iphone'>[];
  env?: ('dev' | 'stage' | 'prod')[];
}

export interface Web3ServiceItem {
  id: string;
  title: string;
  icon: string;
  url?: string;
  network?: string;
  desc_en?: string;
  desc_kr?: string;
  show_condition?: ShowCondition;
}
