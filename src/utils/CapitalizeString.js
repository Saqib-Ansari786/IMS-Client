// Utility function to capitalize the first letter of a string
export function capitalizeString(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string.");
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
