
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.3bd97763bd2e4a3cb60bfabe345b4f64',
  appName: 'taskminder-magic-widget',
  webDir: 'dist',
  server: {
    url: 'https://3bd97763-bd2e-4a3c-b60b-fabe345b4f64.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystorePassword: null,
      keystoreAlias: null,
      keystoreAliasPassword: null,
      signingType: "apksigner"
    }
  }
};

export default config;
