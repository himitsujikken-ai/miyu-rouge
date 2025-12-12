import "server-only";
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListResponse } from "microcms-js-sdk";

// Client type definition
type ClientType = ReturnType<typeof createClient>;

// Lazy initialization of the client to avoid build-time errors when env vars are missing
let client: ClientType | null = null;

const getClient = (): ClientType => {
    if (client) return client;

    // Debug logs as requested
    console.log("DOMAIN:", process.env.MICROCMS_SERVICE_DOMAIN);
    console.log("APIKEY:", process.env.MICROCMS_API_KEY ? "Set" : "Not Set");

    try {
        client = createClient({
            serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
            apiKey: process.env.MICROCMS_API_KEY || "",
        });
    } catch (error) {
        console.warn("MicroCMS client initialization failed (createClient threw). Using mock client.", error);
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

    return client;
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
