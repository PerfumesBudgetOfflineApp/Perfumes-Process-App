import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.perfumes.processapp',
  appName: 'Perfumes Process App',
  webDir: 'dist',
  android: {
    backgroundColor: '#FAFAF9', // مطابق لشاشة البداية — يلغي الومضة البيضاء في فجوة الرسم بين إخفاء السبلاش وأول رسم للمحتوى
    allowMixedContent: false, // لا محتوى مختلطا — تطبيق بلا شبكة أصلا (CSP في index.html يقطع كل الطلبات الخارجية)
  },
  plugins: {
    StatusBar: {
      // overrideable at runtime by main.jsx
      backgroundColor: '#ffffff',
      style: 'DARK',
      overlaysWebView: false,
    },
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#FAFAF9',
      androidScaleType: 'FIT_CENTER',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
      launchAutoHide: true,
    },
    Keyboard: {
      resize: 'body',
    },
  },
};

export default config;
