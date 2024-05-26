"use client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { fetchCoinData } from "./beside";
import React from "react";

interface CoinProps {
  coinId: string;
}

const Coin: React.FC<CoinProps> = ({ coinId }) => {
  console.log(`Rendering Coin component for coinId: ${coinId}`);

  const { data, error, isLoading } = useSuspenseQuery({
    queryKey: ["coinData", coinId],
    queryFn: fetchCoinData,
  });
  console.log(data);
  console.log(
    `Query status - isLoading: ${isLoading}, error: ${error}, data:`,
    data,
  );

  if (isLoading)
    return <div className="text-center text-white">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">
        Error loading data: {error.message}
      </div>
    );

  return (
    <div className="rounded bg-gray-800 p-4 text-white shadow">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p>Symbol: {data.symbol}</p>
      <p>Web Slug: {data.web_slug}</p>
      <p>Asset Platform ID: {data.asset_platform_id}</p>
      <p>Block Time in Minutes: {data.block_time_in_minutes}</p>
      <p>Hashing Algorithm: {data.hashing_algorithm}</p>
      <p>Categories: {data.categories.join(", ")}</p>
      <p>Preview Listing: {data.preview_listing ? "Yes" : "No"}</p>
      <p>Public Notice: {data.public_notice}</p>
      <p>Additional Notices: {data.additional_notices.join(", ")}</p>
      <p>Description: {data.description.en}</p>
      <div>
        <h2 className="text-xl font-semibold">Links:</h2>
        <ul>
          {data.links.homepage.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <p>
          Whitepaper:{" "}
          <a
            href={data.links.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            {data.links.whitepaper}
          </a>
        </p>
        <p>
          Blockchain Sites:{" "}
          {data.links.blockchain_site.map((site, index) => (
            <>
              <a
                key={index}
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {site}
              </a>
              {index !== data.links.blockchain_site.length - 1 && ", "}
            </>
          ))}
        </p>
        <p>
          Official Forum URLs:{" "}
          {data.links.official_forum_url.map((url, index) => (
            <React.Fragment key={index}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {url}
              </a>
              {index !== data.links.official_forum_url.length - 1 && ", "}
            </React.Fragment>
          ))}
        </p>
        <p>
          Chat URLs:{" "}
          {data.links.chat_url.map((url, index) => (
            <>
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {url}
              </a>
              {index !== data.links.chat_url.length - 1 && ", "}
            </>
          ))}
        </p>
      </div>
      <p>
        Image: <img src={data.image.thumb} alt={data.name} />
      </p>
      <p>Country Origin: {data.country_origin}</p>
      <p>Genesis Date: {data.genesis_date}</p>
      <p>Contract Address: {data.contract_address}</p>
      <p>Sentiment Votes Up Percentage: {data.sentiment_votes_up_percentage}</p>
      <p>
        Sentiment Votes Down Percentage: {data.sentiment_votes_down_percentage}
      </p>
      <p>Watchlist Portfolio Users: {data.watchlist_portfolio_users}</p>
      <p>Market Cap Rank: {data.market_cap_rank}</p>
      <p>Status Updates: {JSON.stringify(data.status_updates)}</p>
      <p>Last Updated: {data.last_updated}</p>
    </div>
  );
};

export default Coin;
