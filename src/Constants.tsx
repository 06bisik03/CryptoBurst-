
import React from 'react';
import img1 from './Assets/CoinBinance.webp';
import NewsTile from './Pages/News/Home/NewsTile';
export const SAMPLE_ITEMS = Array.from({ length: 80 }, (x, i) => ({ 
  name: `Coin ${i}`,
}));
export const COIN_FILTERS = ["All Cryptos", "Top Gainers", "Top Losers"];

export const TRADING_DATA_OPTIONS = [
  "Crypto",
  "USDT Market",
  "BNB Market",
  "BTC Market",
  "ETH Market",
];

export const SAMPLE_TEXT_NEWS = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lacus vel purus auctor posuere. Integer ac justo sed ex convallis facilisis. Curabitur nec justo sit amet mi euismod ultricies vel ut magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus efficitur, libero at laoreet pellentesque, lectus purus scelerisque leo, nec pulvinar nulla justo eget erat. Integer vulputate enim at neque tempus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Sed a nibh vel libero tincidunt volutpat. Nullam vehicula, mi nec bibendum luctus, lacus metus tincidunt velit, a suscipit erat magna et dui. Mauris vitae orci feugiat, malesuada libero eu, ultricies enim. Vestibulum tristique purus sit amet quam dictum, in dapibus nunc aliquet. Integer id felis sed mi viverra feugiat at nec libero. Sed vel quam ac quam blandit malesuada. Donec auctor justo sed lectus varius, sed pretium tortor fermentum. Nulla facilisi. Nulla facilisi. Aliquam erat volutpat. Cras tempor, mi vel gravida euismod, magna metus feugiat velit, non commodo mauris justo ac magna.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id cursus libero, et pretium eros. Integer vehicula urna id felis faucibus, sed aliquet nisi condimentum. Maecenas feugiat, turpis ut ultricies tincidunt, eros velit volutpat enim, vitae facilisis ex orci a augue. Duis suscipit, sapien eu mollis fermentum, metus lorem dignissim turpis, et convallis urna nunc non risus. Morbi ac diam at velit varius tempor. Aliquam et odio sit amet eros dignissim finibus. Maecenas eget diam justo. Nulla nec volutpat turpis. Sed ac est lacus. Quisque viverra faucibus lectus, non tincidunt velit volutpat ut.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean at ante eget erat lobortis sodales. Duis vel sapien vitae leo auctor aliquam. Sed faucibus lacus et justo condimentum, a condimentum velit dapibus. Ut id sapien nec purus tempor accumsan eget sed libero. Mauris ultrices ante et magna pulvinar, sit amet lacinia tortor auctor. Integer dictum hendrerit urna, vel vestibulum urna aliquet sit amet. Aliquam erat volutpat. Cras id tortor nec libero congue volutpat. Quisque egestas, magna sit amet dictum mollis, turpis purus tempor arcu, in congue eros sapien a lorem.

Mauris consequat interdum velit, eu tincidunt arcu egestas at. Aliquam nec magna a lacus convallis dignissim. Vestibulum euismod risus sit amet sapien scelerisque gravida. Aenean eget elit ac arcu mollis facilisis. Nam venenatis felis eget lorem vulputate, sed sodales nulla elementum. Donec ut purus sed sapien eleifend convallis sit amet nec libero. Aenean id magna in nunc malesuada suscipit. Aliquam eget ipsum nec tortor facilisis tristique. Pellentesque tristique tempor metus, sed ultricies ex faucibus id. Donec ac egestas enim, non condimentum magna.
`;


export const SAMPLE_NEWS =Array(10).fill(<NewsTile img={img1} />);