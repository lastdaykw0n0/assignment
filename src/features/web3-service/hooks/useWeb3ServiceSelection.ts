import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Web3ServiceItem } from '@/entities/web3-service/model/web3Service.types';
import { openLink } from '@/shared/utils/openLink';
import type { Nullable } from '@/shared/types';

export function useWeb3ServiceSelection() {
  const { i18n } = useTranslation();
  const [selectedItem, setSelectedItem] =
    useState<Nullable<Web3ServiceItem>>(null);

  const handleGoClick = () => {
    if (selectedItem?.url) {
      openLink(selectedItem.url);
    }
  };

  const description = selectedItem
    ? i18n.language.startsWith('ko')
      ? selectedItem.desc_kr
      : selectedItem.desc_en
    : null;

  return {
    selectedItem,
    selectItem: (item: Web3ServiceItem) => setSelectedItem(item),
    clearSelection: () => setSelectedItem(null),
    handleGoClick,
    description,
    isOpen: selectedItem !== null,
  };
}
