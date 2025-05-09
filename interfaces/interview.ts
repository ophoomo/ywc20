export interface Interview {
  firstName: string;
  interviewRefNo: string;
  lastName: string;
  major: MajorType;
}

export enum MajorType {
  DESIGN = "web_design",
  CONTENT = "web_content",
  PROGRAMMING = "web_programming",
  MARKETING = "web_marketing",
}
