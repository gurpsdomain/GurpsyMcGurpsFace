export interface Config {
  theme: string;
  bodyContent: string;
}

export class ConfigImpl implements Config {
  theme = '';
  bodyContent = '';
}
