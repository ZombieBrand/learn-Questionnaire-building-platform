import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";
import QuestionnaireHeader from "./questionnaire-header";

// 模拟数据生成函数
function generateMockData(count: number) {
  const mockData = [];

  for (let i = 1; i <= count; i++) {
    const randomBoolean = Math.random() > 0.5; // 随机生成布尔值
    const randomAnswerCount = Math.floor(Math.random() * 100); // 随机生成回答数量（0-99）
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 1e10) // 随机生成过去的日期
    );

    mockData.push({
      id: i,
      title: `问题标题 ${i}`,
      isPublished: randomBoolean,
      isStar: !randomBoolean, // 取反以增加多样性
      answerCount: randomAnswerCount,
      createAt: randomDate,
      updateAt: randomDate,
    });
  }

  return mockData;
}
const rawQuestionList = generateMockData(25);

interface ListProps {}

const List: React.FC<ListProps> = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);
  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleStats = () => {
    console.log("Stats clicked");
  };

  const handleStar = () => {
    console.log("Star clicked");
  };

  const handleCopy = () => {
    console.log("Copy clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };
  return (
    <Card className="my-10">
      <CardHeader>
        <CardTitle className="flex justify-between items-center ">
          <span className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            我的问卷
          </span>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input placeholder="请输入标题" />
            <Button type="submit">
              <Search />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {questionList.map((item) => (
          <QuestionnaireHeader
            data={item}
            onEdit={handleEdit}
            onStats={handleStats}
            onStar={handleStar}
            onCopy={handleCopy}
            onDelete={handleDelete}
            key={item.id}
          />
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default List;
