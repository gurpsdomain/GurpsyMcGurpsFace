export interface Config {
  bodyContent: Number;
  serverUrl: string;
  theme: string;
}

export class ConfigImpl implements Config {
  bodyContent = 0;
  serverUrl = '';
  theme = '';
}
