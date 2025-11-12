import BannerSlider from '@/widgets/banner-slider/ui/BannerSlider';
import FavoriteList from '@/widgets/favorites/ui/FavoriteList';
import Web3ServiceList from '@/widgets/web3-service-list/ui/Web3ServiceList';

function DiscoveryPage() {
  return (
    <>
      <BannerSlider />
      <FavoriteList />
      <Web3ServiceList />
    </>
  );
}

export default DiscoveryPage;
