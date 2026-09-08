/**
 * Example Adobe I/O Runtime-style action.
 * Adapt authentication, secrets and response helpers to the App Builder
 * runtime generated for your project.
 */
module.exports.main = async function main(params) {
  const correlationId =
    params.__ow_transaction_id || `local-${Date.now().toString(36)}`;

  try {
    const productId = typeof params.productId === "string"
      ? params.productId.trim()
      : "";

    if (!productId) {
      return {
        statusCode: 400,
        body: {
          error: "productId is required",
          correlationId
        }
      };
    }

    const apiBaseUrl = process.env.PRODUCT_API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error("PRODUCT_API_BASE_URL is not configured");
    }

    // Add authentication from environment secrets.
    // Use AbortController/timeout in real external requests.
    // Validate/normalize the upstream response before returning it.

    return {
      statusCode: 200,
      body: {
        productId,
        correlationId,
        message: "Replace with protected integration logic"
      }
    };
  } catch (error) {
    console.error(JSON.stringify({
      correlationId,
      error: error.message
    }));

    return {
      statusCode: 500,
      body: {
        error: "Internal integration error",
        correlationId
      }
    };
  }
};
