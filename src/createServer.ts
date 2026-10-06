import { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";

export function createServer(){
    const server = new McpServer({name: "ledgerline-mcp", version: "0.1.0"});

    server.registerTool(
        "get_balance",
        {
            description: "fetches the account balance of the logged in user",
            inputSchema: z.object({}),
        },
        async ()=>({
            content: [{type: "text", text: "20500.00"}],
        }),
    );

    return server;
}