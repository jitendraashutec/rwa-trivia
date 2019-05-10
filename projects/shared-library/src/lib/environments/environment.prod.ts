import { IConfig } from './iconfig';
import { appConstants } from 'shared-library/shared/model';
export const environment = {
  production: true
};

export const CONFIG: IConfig = {
  'firebaseConfig': {
    apiKey: 'AIzaSyDIEpabJv44Iu7go6M30T3WAF-GlSMcR7Y',
    authDomain: 'bitwiser.io',
    databaseURL: 'https://rwa-trivia.firebaseio.com',
    projectId: 'rwa-trivia',
    storageBucket: 'rwa-trivia.appspot.com',
    messagingSenderId: '479350787602'
  },
  'functionsUrl': `https://bitwiser.io/${appConstants.API_VERSION}`
};
