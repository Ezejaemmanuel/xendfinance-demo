export interface ResType {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string;
  platforms: Platforms;
  detail_platforms: Detailplatforms;
  block_time_in_minutes: number;
  hashing_algorithm: null;
  categories: string[];
  preview_listing: boolean;
  public_notice: null;
  additional_notices: string[];
  description: Description;
  links: Links;
  image: Image;
  country_origin: null;
  genesis_date: null;
  contract_address: string;
  sentiment_votes_up_percentage: null;
  sentiment_votes_down_percentage: null;
  watchlist_portfolio_users: number;
  market_cap_rank: null;
  status_updates: any[];
  last_updated: string;
}

interface Image {
  thumb: string;
  small: string;
  large: string;
}

interface Links {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: null[];
  twitter_screen_name: string;
  facebook_username: null;
  bitcointalk_thread_identifier: null;
  telegram_channel_identifier: null;
  subreddit_url: null;
  repos_url: Reposurl;
}

interface Reposurl {
  github: any[];
  bitbucket: any[];
}

interface Description {
  en: string;
}

interface Detailplatforms {
  "arbitrum-one": Arbitrumone;
}

interface Arbitrumone {
  decimal_place: number;
  contract_address: string;
}

interface Platforms {
  "arbitrum-one": string;
}
