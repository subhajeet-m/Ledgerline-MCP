import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { createServer } from "./createServer.js";

async function main(){
    const server = createServer();
    await server.connect(new StdioServerTransport());
    console.error("ledgerline-mcp running on stdio");
}

main().catch((err)=>{
    console.error("Fatal: ", err);
    process.exit(1);
});