import { Injectable } from '@nestjs/common';

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

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getKimiResponse(text: string, imageUrl: string): Promise<KimiResponse> {
    const apiKey = process.env.KIMI_K2_API_KEY;

    if (!apiKey) {
      throw new Error('KIMI_K2_API_KEY environment variable is not set');
    }

    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://kimi-used-app.com', // Replace with your actual site URL
          'X-Title': 'Kimi Used App', // Replace with your actual site name
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-chat-v3.1:free',
          messages: [
            {
              role: 'user',
              content: 'What is 23-56-9',
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} ${errorText}`);
    }

    return (await response.json()) as KimiResponse;
  }
}
