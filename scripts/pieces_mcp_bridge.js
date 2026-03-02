const http = require('http');

/**
 * A simple stdio-to-http bridge for MCP servers that only expose an HTTP endpoint.
 * This script reads JSON-RPC messages from stdin and forwards them as POST requests
 * to the Pieces MCP endpoint, then writes the responses back to stdout.
 */

const TARGET_URL = 'http://localhost:39300/model_context_protocol/v1';

process.stdin.on('data', (data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = http.request(TARGET_URL, options, (res) => {
        res.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.write(data);
    req.end();
});
