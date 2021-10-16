export const port = process.env.PORT || 5000;
export const rateLimit = {
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // 100 requests per IP
};
