import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, BarChart2, Star, Copy, Trash2 } from "lucide-react";
import type { QuestionnaireListType } from "@/pages/List/types";

interface QuestionnaireHeaderProps {
  data: QuestionnaireListType;
  onEdit?: () => void;
  onStats?: () => void;
  onStar?: () => void;
  onCopy?: () => void;
  onDelete?: () => void;
}

const QuestionnaireHeader: React.FC<QuestionnaireHeaderProps> = ({
  data,
  onEdit,
  onStats,
  onStar,
  onCopy,
  onDelete,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  };

  const updatedAtFormatted = formatDate(data.updateAt);

  return (
    <Card className="bg-white shadow-sm my-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-lg font-medium text-gray-900">{data.title}</h1>
            <div className="flex items-center space-x-2">
              <Button size="lg" onClick={onEdit}>
                <Edit />
                <span>编辑问卷</span>
              </Button>
              <Button size="lg" onClick={onStats}>
                <BarChart2 className="w-4 h-4" />
                <span>数据统计</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Badge
                variant={data.isPublished ? "default" : "secondary"}
                className={
                  data.isPublished
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }
              >
                {data.isPublished ? "已发布" : "未发布"}
              </Badge>
              <span className="text-sm text-gray-500">
                答卷:{data.answerCount}
              </span>
              <span className="text-sm text-gray-500">
                {updatedAtFormatted}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={`${
                  data.isStar ? "text-yellow-500" : "text-gray-400"
                } hover:text-yellow-500`}
                onClick={onStar}
              >
                <Star
                  className="w-4 h-4"
                  fill={data.isStar ? "currentColor" : "none"}
                />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-600"
                onClick={onCopy}
              >
                <Copy className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-red-500"
                onClick={onDelete}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default QuestionnaireHeader;
