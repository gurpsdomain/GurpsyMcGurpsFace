export interface Config {
  theme: string;
  bodyContent: Number;
}

export class ConfigImpl implements Config {
  theme = '';
  bodyContent = 0;
}
