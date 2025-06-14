const { app } = require("@azure/functions");

app.http("products", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const products = [
      { id: 123, name: "tyre", value: 455.67, avaiable_stock: 2 },
    ];

    return {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(products)
    }
  },
});
