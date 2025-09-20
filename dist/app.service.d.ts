export interface KimiResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{
        message: {
            role: string;
            content: string;
        };
        index: number;
        finish_reason: string;
    }>;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}
export declare class AppService {
    getHello(): string;
    getKimiResponse(text: string, imageUrl: string): Promise<KimiResponse>;
}
