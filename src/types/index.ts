export interface ServerResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export interface CanFile {
  canId?: number;
  filename?: string;
  brandMaskLevel?: string;
  betlabName?: string;
  betlabDescription?: string;
  themeTitle?: string | null;
  scopeSummary?: string | null;
}

export type Can = {
  id: number;
  text?: string;
  url: string;
  type?: string;
  state?: string | { slug?: string };
  file?: CanFile;
};

export type CanStates = {
  label?: string;
  slug?: string;
  type?: string;
};

export type Provider = {
  slug: string;
  hasRgSurvey: boolean;
  hasTypes: boolean;
  cans: Can[] | [];
  CanStates: CanStates[] | [];
};

export const Types = [
  { slug: "casino", label: "CASINO" },
  { slug: "sports", label: "SPORTSBOOK" },
];
