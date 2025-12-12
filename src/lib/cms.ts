import "server-only";
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListResponse } from "microcms-js-sdk";

// Client type definition
type ClientType = ReturnType<typeof createClient>;

export const getClient = (): ClientType => {
    const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
    const apiKey = process.env.MICROCMS_API_KEY || process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

    // 鍵がない場合はダミーを返してビルドを落とさない（最重要）
    if (!serviceDomain || !apiKey) {
        console.warn("MicroCMS keys are missing. Using mock client.");
        return {
            getList: async () => {
                console.warn("MicroCMS mock: getList called");
                return { contents: [], totalCount: 0, offset: 0, limit: 0 };
            },
            getListDetail: async () => {
                console.warn("MicroCMS mock: getListDetail called");
                return null;
            },
            getObject: async () => null,
            getAllContentIds: async () => [],
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
