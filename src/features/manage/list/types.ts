export interface QuestionnaireListType {
  _id:string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: Date;
  updateAt: Date;
}
