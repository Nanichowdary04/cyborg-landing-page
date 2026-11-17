export interface Capability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageCaption: string;
  metrics: {
    label: string;
    value: string;
  }[];
  coordinates: { x: number; y: number };
}

export interface Specification {
  category: string;
  parameter: string;
  value: string;
  standard: string;
  status: 'VERIFIED' | 'COMPLIANT' | 'BENCHMARKED';
}

export interface ResearchPaper {
  id: string;
  code: string;
  title: string;
  institution: string;
  year: string;
  type: string;
  abstract: string;
}
