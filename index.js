exports.handler = async (event) => {
    try {
        const parsedBody = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
        const { numbers } = parsedBody || {};

        if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Invalid input: numbers must be an array of numbers.',
                }),
            };
        }

        const count = numbers.reduce((ky, num) => {
            ky[num] = (ky[num] || 0) + 1;
            return ky;
        }, {});

        const mostFrequent = Object.keys(count).reduce((a, b) => (count[b] > count[a] ? b : a));
        const maxCount = count[mostFrequent];

        return {
            statusCode: 200,
            body: JSON.stringify({ num: parseInt(mostFrequent, 10), count: maxCount }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'An internal error occurred. Please try again later.',
                details: error.message,
            }),
        };
    }
};