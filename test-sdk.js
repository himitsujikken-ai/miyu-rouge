const { createClient } = require('microcms-js-sdk');

console.log("Testing createClient behavior with empty strings...");

try {
    const client = createClient({
        serviceDomain: "",
        apiKey: "",
    });
    console.log("Client created successfully (unexpected if validation exists)");
} catch (error) {
    console.log("Caught expected error:", error.message);
}

try {
    const client = createClient({
        serviceDomain: undefined,
        apiKey: undefined,
    });
    console.log("Client created with undefined (unexpected)");
} catch (error) {
    console.log("Caught expected error (undefined):", error.message);
}
