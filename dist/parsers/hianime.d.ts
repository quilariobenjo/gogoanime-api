import { type HttpError } from "http-errors";
import type { ISearch, IAnimeResult, IAnimeInfo, ISource } from "../types/types";
import { StreamingServers } from "../types/types";
import { IScrapedAnimeEpisodes, IScrapedAnimeMostView, IScrapedEpisodeServers } from "../types/parsers";
export declare const search: (query: string, page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchAnimeInfo: (id: string) => Promise<IAnimeInfo | HttpError>;
export declare const fetchAnimeEpisodes: (animeId: string) => Promise<IScrapedAnimeEpisodes>;
export declare const fetchEpisodeSource: (episodeId: string, server?: StreamingServers, category?: "sub" | "dub" | "raw") => Promise<ISource>;
export declare const fetchEpisodeServers: (episodeId: string) => Promise<IScrapedEpisodeServers>;
export declare const fetchTvSeries: (page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchMostPopular: (page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchTopAiring: (page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchMostFavorite: (page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchLatestCompleted: (page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchRecentlyAdded: (page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchLatestEpisodes: (page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchTopUpcoming: (page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchStudio: (studio: string, page?: number) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchSpotlight: () => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchTrending: () => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchMostView: () => Promise<IScrapedAnimeMostView | HttpError>;
export declare const fetchAiringSchedule: (date?: string) => Promise<ISearch<IAnimeResult> | HttpError>;
export declare const fetchSearchSuggestion: (query: string) => Promise<ISearch<IAnimeResult> | HttpError>;
