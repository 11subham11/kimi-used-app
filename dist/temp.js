"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer <OPENROUTER_API_KEY>',
        'HTTP-Referer': '<YOUR_SITE_URL>',
        'X-Title': '<YOUR_SITE_NAME>',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        model: 'moonshotai/kimi-vl-a3b-thinking:free',
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: 'What is in this image?',
                    },
                    {
                        type: 'image_url',
                        image_url: {
                            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg',
                        },
                    },
                ],
            },
        ],
    }),
});
//# sourceMappingURL=temp.js.map