// apiMiddleware.js
const apiMiddleware = async (path, options = {}) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL; // Retrieve base URL from environment variable
    const url = `${baseUrl}${path}`;

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    if (
      options.method === "DELETE" ||
      options.method === "PUT" ||
      options.method === "POST"
    ) {
      return data;
    }

    return data.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export default apiMiddleware;
