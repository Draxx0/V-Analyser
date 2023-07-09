export interface Status {
  status: number;
}

export interface IResponseResult {
  total: number;
  returned: number;
  before: number;
  after: number;
};

export interface Error extends Status {
  errors: [
    {
      message: string;
      code: number;
      details: string;
    }
  ]
}
