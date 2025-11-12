import type { Web3ServiceItem } from '@/entities/web3-service/model/web3Service.types';
import { web3ServiceData } from '@/mocks/web3ServiceData';
import { apiFetch } from '@/shared/api/client';
import { filterWeb3Services } from '../lib/filterWeb3Services';

const API_URL = '/api/web3-services';
const USE_MOCK = import.meta.env.MODE === 'development';

const ITEMS_PER_PAGE = 3;

export interface FetchWeb3ServicesParams {
  page: number;
  pageSize?: number;
}

export interface FetchWeb3ServicesResponse {
  items: Web3ServiceItem[];
  hasMore: boolean;
  total: number;
}

export async function fetchWeb3Services(
  params: FetchWeb3ServicesParams
): Promise<FetchWeb3ServicesResponse> {
  const pageSize = params.pageSize || ITEMS_PER_PAGE;
  const { page } = params;

  if (USE_MOCK) {
    const filteredServices = filterWeb3Services(web3ServiceData);

    const startIdx = (page - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const items = filteredServices.slice(startIdx, endIdx);
    const hasMore = endIdx < filteredServices.length;

    return apiFetch(API_URL, {
      items,
      hasMore,
      total: filteredServices.length,
    });
  }

  const response = await apiFetch<FetchWeb3ServicesResponse>(
    `${API_URL}?page=${page}&pageSize=${pageSize}`
  );

  return {
    ...response,
    items: filterWeb3Services(response.items),
  };
}
