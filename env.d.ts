declare namespace import.meta {
    interface Env {
      VITE_APP_EMAILJS_SERVICE_ID: string;
      VITE_APP_EMAILJS_TEMPLATE_ID: string;
      VITE_APP_EMAILJS_PUBLIC_KEY: string;
    }
  
    interface ImportMeta {
      readonly env: Env;
    }
  }
  