export interface QuestionnaireListType {
  id: number;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: Date;
  updateAt: Date;
}
