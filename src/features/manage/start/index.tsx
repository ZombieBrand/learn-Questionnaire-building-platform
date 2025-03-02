import { useState } from 'react'
import { Search, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { EmptyState } from '@/components/ui/empty-state'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import QuestionnaireHeader from '@/features/manage/list/QuestionnaireHeader'

// 模拟数据生成函数
function generateMockData(count: number) {
  const mockData = []

  for (let i = 1; i <= count; i++) {
    const randomBoolean = Math.random() > 0.5 // 随机生成布尔值
    const randomAnswerCount = Math.floor(Math.random() * 100) // 随机生成回答数量（0-99）
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 1e10) // 随机生成过去的日期
    )

    mockData.push({
      _id: i.toString(),
      title: `问题标题 ${i}`,
      isPublished: randomBoolean,
      isStar: true, // 在星标页面，所有问卷都是已标星的
      answerCount: randomAnswerCount,
      createAt: randomDate,
      updateAt: randomDate,
    })
  }

  return mockData
}
const rawQuestionList = generateMockData(10) // 生成较少的数据，因为是星标问卷

interface StarProps {}

const Star: React.FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <Header></Header>
      <Main>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center justify-between'>
              <span className='scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0'>
                星标问卷
              </span>
              <div className='flex w-full max-w-sm items-center justify-end space-x-4'>
                <div className='flex'>
                  <Input placeholder='请输入问卷名' />
                  <Button>
                    <Search />
                  </Button>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {questionList.length > 0 ? (
              questionList.map((item) => (
                <QuestionnaireHeader data={item} key={item._id} />
              ))
            ) : (
              <EmptyState
                title='没有星标问卷'
                description=''
                icons={[FileText]}
                className='m-auto'
                action={{
                  label: '刷新',
                  onClick: () => console.log('Refresh clicked'),
                }}
              />
            )}
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href='#' />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#'>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#'>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href='#' />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </Main>
    </>
  )
}

export default Star
