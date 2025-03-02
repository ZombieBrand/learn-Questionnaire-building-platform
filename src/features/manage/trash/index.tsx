import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Payment, columns } from './components/columns'
import { DataTable } from './components/data-table'

// 模拟数据生成函数
async function generateMockData(count: number) {
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

export default function TrashPage() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = (await generateMockData(20)) as Payment[]
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <Main>
        <div className='mx-auto flex flex-col gap-4 py-10'>
          <div className='flex'>
            <Input className='w-60' placeholder='请输入问卷名' />
            <Button>
              <Search />
            </Button>
          </div>
          <DataTable columns={columns} data={data} />
        </div>
      </Main>
    </>
  )
}
