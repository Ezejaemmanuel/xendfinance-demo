// Determine the base URL based on the environment
const BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

export function getBaseUrl(route: string) {
  // Check if the route starts with a '/'
  if (route.startsWith("/")) {
    throw new Error("Route should not start with '/'.");
  }

  // Construct the full URL by appending the route to the base URL
  const fullUrl = `${BASE_URL}/${route}`;

  return fullUrl;
}
