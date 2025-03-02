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
      isStar: !randomBoolean, // 取反以增加多样性
      answerCount: randomAnswerCount,
      createAt: randomDate,
      updateAt: randomDate,
    })
  }

  return mockData
}
const rawQuestionList = generateMockData(25)

interface ListProps {}

const List: React.FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const pageSize = 8

  // 根据搜索值过滤问卷列表
  const filteredList = questionList.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  // 计算总页数
  const totalPages = Math.ceil(filteredList.length / pageSize)

  // 获取当前页的数据
  const currentPageData = filteredList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  // 处理页码变化
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // 处理搜索
  const handleSearch = (value: string) => {
    setSearchValue(value)
    setCurrentPage(1) // 重置到第一页
  }

  // 生成页码数组
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <>
      <Header></Header>
      <Main>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center justify-between'>
              <span className='scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0'>
                我的问卷
              </span>
              <div className='flex w-full max-w-sm items-center justify-end space-x-4'>
                <Button>新建问卷</Button>
                <div className='flex'>
                  <Input
                    placeholder='请输入问卷名'
                    value={searchValue}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <Button>
                    <Search />
                  </Button>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentPageData.length > 0 ? (
              currentPageData.map((item) => (
                <QuestionnaireHeader data={item} key={item._id} />
              ))
            ) : (
              <EmptyState
                title='没有问卷数据'
                description=''
                icons={[FileText]}
                className='m-auto'
                action={{
                  label: '刷新',
                  onClick: () => console.log('Create form clicked'),
                }}
              />
            )}
          </CardContent>
          <CardFooter className='flex justify-between'>
            {totalPages > 0 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={
                        currentPage === 1
                          ? 'pointer-events-none opacity-50'
                          : ''
                      }
                    />
                  </PaginationItem>
                  {pageNumbers.map((pageNumber) => (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        onClick={() => handlePageChange(pageNumber)}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={
                        currentPage === totalPages
                          ? 'pointer-events-none opacity-50'
                          : ''
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </CardFooter>
        </Card>
      </Main>
    </>
  )
}

export default List
