import { Request, Response, NextFunction } from "express";
export declare const getSearch: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAnimeInfo: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAnimeEpisodes: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAnimeSources: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getEpisodeServers: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getTvSeries: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getMostPopular: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTopAiring: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getMostFavorite: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getLatestCompleted: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRecentlyAdded: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getLatestEpisodes: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getStudio: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTopUpcoming: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getSpotlight: (_: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTrending: (_: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getMostView: (_: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAiringSchedule: (req: Request, res: Response, next: NextFunction) => Promise<void>;
