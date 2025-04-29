import { CodeBlock } from "@/components/ui/code-block";
import React from "react";

const Commands = () => {
    const Python = `# Using Token authentication
import requests
# Your API token from the platform dashboard or API settings
token = "tk_095fa33201c94b108aee"
# Use streaming response
response = requests.post(
    "https://deepcore.top/api/open/agents/{"agentId}/dialogue",
    headers={
        "X-API-Token": token
    },
    json={
        "message": "Hello, Agent!",
        "conversation_id": "optional-conversation-id",
        "init_flag": False
    },
    stream=True  # Enable streaming
)
# Process streaming response
for chunk in response.iter_lines():
    if chunk:
        # Filter out empty lines
        data = chunk.decode('utf-8')
        if data.startswith('data: '):
            # Remove 'data: ' prefix
            content = data[6:]
            print(content)
      `;

    const Golang = `// Using Token authentication
package main
import (
    "bufio"
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "strings"
)
func main() {
    // Your API token from the platform dashboard or API settings
    token := "tk_095fa33201c94b108aee"
    // Use token to call API
    apiURL := "https://deepcore.top/api/open/agents/{"agentId}/dialogue"
    apiReqBody := []byte('{
        "message": "Hello, Agent!",
        "conversation_id": "optional-conversation-id",
        "init_flag": false
    }')
    apiReq, _ := http.NewRequest("POST", apiURL, bytes.NewBuffer(apiReqBody))
    apiReq.Header.Set("Content-Type", "application/json")
    apiReq.Header.Set("X-API-Token", token)
    client := &http.Client{}
    apiResp, err := client.Do(apiReq)
    if err != nil {
        fmt.Println("Error calling API:", err)
        return
    }
    defer apiResp.Body.Close()
    // Process streaming response
    scanner := bufio.NewScanner(apiResp.Body)
    for scanner.Scan() {
        line := scanner.Text()
        if strings.HasPrefix(line, "data: ") {
            // Remove 'data: ' prefix
            content := line[6:]
            fmt.Println(content)
        }
    }
    if err := scanner.Err(); err != nil {
        fmt.Println("Error reading response:", err)
    }
}`;
    return (
        <section className="px-5 lg:px-0 py-20 lg:py-40">
            <div className="max-w-7xl space-y-10 relative mx-auto">
                <div className="space-y-4 text-center">
                    <h2 className="lg:text-6xl heading capitalize mt-4">Using Tradix&apos;s advanced features</h2>
                    <p className="text-[#b2b2b2] text-xl max-w-2xl mx-auto">
                        CASE: This is a case study, if you can code, you can generate a more advanced AI agent based on the platform 0 code, here is the case study.
                    </p>
                </div>
                <CodeBlock
                    language="jsx"
                    filename="Python"

                    // code={code}
                    tabs={[
                        { name: "Python", code: Python, language: "python", highlightLines: [9, 13, 14, 18] },
                        {
                            name: "GoLang",
                            code: Golang,
                            language: "go",
                            highlightLines: [14, 4, 5, 6, 7, 8, 9, 10, 11, 16, 3],
                        },
                    ]}
                />
                {/* <div data-scroll data-scroll-speed="3" className="bg-agent-blur absolute -left-[950px] top-1/2 -translate-y-1/2 z-10"></div> */}
            </div>
        </section>
    );
};

export default Commands;
