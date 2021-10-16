export const jwtSecret = process.env.JWT_SECRET;

export const port = process.env.PORT || 5000;

export const rateLimit = {
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // 100 requests per IP
};

export const smtpHost = process.env.SMTP_HOST;
export const smtpPort = process.env.SMTP_PORT;
export const smtpUser = process.env.SMTP_USER;
export const smtpPass = process.env.SMTP_PASS;
export const smtpFrom = process.env.SMTP_FROM;
