export interface AccountTagged {
  url: string;
  name: string;
  location: number;
  type_benefit: ProgramBenefit[];
  image: Image;
}

export interface ProgramBenefit {
  program_name: string;
  value: number;
}

export interface AccountFlaged {
  url: string;
  name: string;
  image: string;
}

export interface Image {
  id: string;
  type: string;
  url: string;
  highlighted: boolean;
  thumb: boolean;
}
