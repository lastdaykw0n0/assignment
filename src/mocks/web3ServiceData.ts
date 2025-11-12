import type { Web3ServiceItem } from '@/entities/web3-service/model/web3Service.types';

export const web3ServiceData: Web3ServiceItem[] = [
  {
    id: '1',
    title: 'MoonPay',
    icon: '/icons/icon_moonpay.png',
    url: 'https://buy.moonpay.com/v2/buy',
    desc_en:
      'MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment',
    show_condition: {
      platform: ['iphone'],
      lang: ['en'],
    },
  },
  {
    id: '2',
    title: 'FTSO Portal',
    icon: '/icons/icon_ftso.png',
    url: 'https://ftsoportal.com/',
    network: 'Songbird, Flare',
    desc_en:
      'FTSO Portal is a service by D’CENT to provide fast and easy way to delegate Vote Power to the user’s favorite FTSO provider. By delegating Vote Power, users can earn passive income as reward.',
    desc_kr:
      'FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power 쉽고 빠르게 위임할 수 있는 기능을 제공하는 디센트의 서비스입니다. 사용자는 Vote Power 위임을 통해 패시브인컴(passive income)을 보상으로 받을 수 있습니다.',
  },
  {
    id: '3',
    title: 'Astar Portal',
    icon: '/icons/icon_astar.png',
    url: 'https://portal.astar.network/',
    network: 'Astar',
    desc_en:
      'Astar Portal is the official Astar Network application for using everything that Astar Network offers.',
    desc_kr:
      'Astar Portal은 Astar Network에서 제공하는 모든 것을 사용하기 위한 Astar Network의 공식 애플리케이션입니다.',
    show_condition: {
      env: ['dev', 'stage'],
    },
  },
  {
    id: '4',
    title: '1inch',
    icon: '/icons/icon_1inch.png',
    url: 'https://app.1inch.io/',
    network: 'Ethereum',
    desc_en:
      "1inch is a decentralized exchange (DEX) aggregator. It's designed to roll liquidity and pricing from all major DEXes into one platform, making it easy to get the best price for the desired trade.",
    desc_kr:
      '1inch는 모든 주요 DEX 거래소의 유동성과 가격 정보를 하나의 플랫폼에서 제공합니다. 원하는 거래의 가격을 쉽게 조회하여 토큰을 교환할 수 있습니다.',
  },
  {
    id: '5',
    title: 'XDSea',
    icon: '/icons/icon_xdsea.png',
    url: 'https://xdsea.io/',
    network: 'XDC',
    desc_en:
      "XDSea is the world's first and largest peer-to-peer decentralized marketplace for buying and selling NFTs built on the XDC Network.",
    desc_kr:
      'XDSea는 XDC 네트워크에 구축된 NFT를 사고 파는 세계 최초이자 최대 규모의 P2P 분산형 시장입니다.',
  },
  {
    id: '6',
    title: 'Compound',
    icon: '/icons/icon_compound.png',
    url: 'https://app.compound.finance/',
    network: 'Ethereum',
    desc_en:
      "Compound is Ethereum's algorithmic money market protocol that allows users to earn interest or borrow assets through collateral. Anyone can supply assets to Compound's liquidity pool and earn continuous compound interest immediately.",
    desc_kr:
      'Compound는 담보를 통해 이자를 얻거나 자산을 빌릴 수 있는 이더리움 기반의 머니 마켓 프로토콜입니다. 컴파운드의 유동성 풀에 자산을 공급하면 복리이자를 얻을 수 있습니다.',
  },
  {
    id: '7',
    title: 'PoolTogether',
    icon: '/icons/icon_pooltogether.png',
    url: 'https://app.pooltogether.com/',
    network: 'Ethereum',
    desc_en:
      'PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a “savings ticket”. Each Savings Ticket gives you a chance to win a prize, but even if you don’t win, you keep all your money!',
    desc_kr:
      'PoolTogether는 저축을 재미있게 하는 이더리움 기반의 서비스입니다. 자산을 예치하면 “저축 티켓“을 받아 "풀"에 참여합니다. 각 저축 티켓은 풀에서 발생한 이자를 받을 수있는 기회를 제공하지만, 당첨되지 않더라도 손실이 없습니다.',
  },
  {
    id: '8',
    title: 'OpenSea',
    icon: '/icons/icon_opensea.png',
    url: 'https://opensea.io/',
    network: 'Ethereum, Polygon',
    desc_en:
      'OpenSea is a marketplace for digital goods, including collectibles, game items, digital art, and other digital assets backed by blockchain such as Ethereum.',
    desc_kr:
      'OpenSea는 수집품, 게임 아이템, 디지털 아트와 같은 이더리움 기반의 디지털 상품 및 디지털 자산을 거래할 수 있는 마켓 플레이스입니다.',
  },
  {
    id: '9',
    title: 'BlueWhale',
    icon: '/icons/icon_bluewhale.png',
    url: 'https://bwpm.io/',
    network: 'Kaia',
    desc_en:
      'BlueWhale is a project that aims to provide a user-friendly DeFi service. It provides services related to DeFi, such as DeFi Dashboard, DEX Aggregator, and Automatic Re-Deposit Service, to make it easier and more efficient for users to participate in the Kaia DeFi ecosystem.',
    desc_kr:
      'BlueWhale는 사용자 친화적인 디파이 서비스를 제공하는 프로젝트입니다. 디파이 대시보드, DEX 어그리게이터, 자동 재예치 서비스 등 탈중앙화 금융(DeFi) 관련 서비스 제공을 통해 클레이튼 디파이 생태계 활동을 더 쉽고 효율적으로 만듭니다.',
    show_condition: {
      lang: ['kr'],
    },
  },
];
