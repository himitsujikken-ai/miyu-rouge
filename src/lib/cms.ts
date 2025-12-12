import "server-only";
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListResponse } from "microcms-js-sdk";

// Client type definition
type ClientType = ReturnType<typeof createClient>;

// クライアントを即時作成せず、関数で取得させる
export const getClient = (): ClientType => {
    const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
    const apiKey = process.env.MICROCMS_API_KEY || process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

    // 鍵がない場合でもビルドを落とさないためのダミー（モック）を返す
    if (!serviceDomain || !apiKey) {
        console.warn("⚠️ MicroCMS keys are missing. Using mock client to prevent build failure.");
        return {
            get: async () => ({ contents: [], totalCount: 0, offset: 0, limit: 0 }), // User's 'get'
            getList: async () => ({ contents: [], totalCount: 0, offset: 0, limit: 0 }), // Actual SDK 'getList'
            getListDetail: async () => null,
            getAllContents: async () => [],
            getAllContentIds: async () => [], // Added for completeness
            getObject: async () => null, // Added to satisfy full interface if needed, relying on 'as any' mostly
        } as unknown as ClientType;
    }

    return createClient({
        serviceDomain,
        apiKey,
    });
};

export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    body: string; // HTML content
    iCatch?: MicroCMSImage; // Custom field name
    categoly?: string[]; // Custom field name (Typo in CMS)
    excerpt?: string; // Optional excerpt
};

export type BlogResponse = MicroCMSListResponse<Blog>;

export const getBlogPosts = async (queries?: MicroCMSQueries) => {
    const detail = await getClient().getList<Blog>({
        endpoint: "blog",
        queries,
    });
    return detail;
};

export const getBlogPost = async (contentId: string, queries?: MicroCMSQueries) => {
    const detail = await getClient().getListDetail<Blog>({
        endpoint: "blog",
        contentId,
        queries,
    });
    return detail;
};
