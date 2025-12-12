import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListResponse } from "microcms-js-sdk";

// Define the client type based on the SDK's createClient return type
// Define the client type based on the SDK's createClient return type
type ClientType = ReturnType<typeof createClient>;

let client: ClientType;

try {
    if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
        throw new Error("MicroCMS credentials missing");
    }
    client = createClient({
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
    });
} catch (error) {
    console.warn("MicroCMS client initialization failed. Using mock client.", error);
    client = {
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

export { client };

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
    const detail = await client.getList<Blog>({
        endpoint: "blog",
        queries,
    });
    return detail;
};

export const getBlogPost = async (contentId: string, queries?: MicroCMSQueries) => {
    const detail = await client.getListDetail<Blog>({
        endpoint: "blog",
        contentId,
        queries,
    });
    return detail;
};
