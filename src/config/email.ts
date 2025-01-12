export const emailConfig = {
  smtp: {
    host: import.meta.env.VITE_SMTP_HOST || 'smtp.office365.com',
    port: parseInt(import.meta.env.VITE_SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: import.meta.env.VITE_SMTP_USER,
      pass: import.meta.env.VITE_SMTP_PASS
    }
  },
  from: {
    name: 'GRIFZ Fashion'
  }
};