import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Edit, BarChart2, Star, Copy, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ConfirmDialog } from '@/components/confirm-dialog'
import type { QuestionnaireListType } from '@/features/manage/list/types'

interface QuestionnaireHeaderProps {
  data: QuestionnaireListType
}
const formatDate = (dateString: Date) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const second = date.getSeconds().toString().padStart(2, '0')
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

const QuestionnaireHeader: React.FC<QuestionnaireHeaderProps> = ({ data }) => {
  const [openDelete, setOpenDelete] = useState(false)
  const [openCopy, setOpenCopy] = useState(false)
  const [loading, setLoading] = useState(false)
  const updatedAtFormatted = formatDate(data.updateAt)
  const navigate = useNavigate()
  const onEdit = (item: QuestionnaireListType) => {
    navigate({
      to: '/question/$questionId/edit',
      params: {
        questionId: item._id,
      },
    })
  }
  const onStatistics = (item: QuestionnaireListType) => {
    navigate({
      to: '/question/$questionId/statistics',
      params: {
        questionId: item._id,
      },
    })
  }
  const onStar = () => {}
  const onCopy = (item: QuestionnaireListType) => {
    console.log(item, 'onCopy')
  }
  const onDelete = (item: QuestionnaireListType) => {
    console.log(item, 'onDelete')
  }
  return (
    <Card className='my-4 shadow-sm'>
      <CardContent className='p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='icon'
              className={`${
                data.isStar ? 'text-yellow-500' : 'text-gray-400'
              } hover:text-yellow-500`}
              onClick={onStar}
            >
              <Star
                className='h-4 w-4'
                fill={data.isStar ? 'currentColor' : 'none'}
              />
            </Button>
            <h1 className='text-lg font-medium'>{data.title}</h1>
            <div className='flex items-center space-x-2'>
              <Button size='lg' onClick={() => onEdit(data)}>
                <Edit />
                <span>编辑问卷</span>
              </Button>
              <Button size='lg' onClick={() => onStatistics(data)}>
                <BarChart2 className='h-4 w-4' />
                <span>数据统计</span>
              </Button>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <Badge
                variant={data.isPublished ? 'default' : 'secondary'}
                className={
                  data.isPublished
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }
              >
                {data.isPublished ? '已发布' : '未发布'}
              </Badge>
              <span className='text-sm'>答卷:{data.answerCount}</span>
              <span className='text-sm'>{updatedAtFormatted}</span>
            </div>

            <div className='flex items-center space-x-2 *:cursor-pointer'>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-400 hover:text-gray-600'
                onClick={() => setOpenCopy(true)}
              >
                <Copy className='h-4 w-4' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-400 hover:text-red-500'
                onClick={() => setOpenDelete(true)}
              >
                <Trash2 className='h-4 w-4' />
              </Button>
              <ConfirmDialog
                key='delete'
                destructive
                isLoading={loading}
                open={openDelete}
                onOpenChange={setOpenDelete}
                handleConfirm={() => {
                  setLoading(true)
                  setTimeout(() => {
                    setLoading(false)
                    setOpenDelete(false)
                  }, 500)
                }}
                className='max-w-md'
                title={`删除问卷`}
                desc={'此操作无法撤销, 请谨慎操作'}
                confirmText='删除'
              />
              <ConfirmDialog
                key='copy'
                destructive
                isLoading={loading}
                open={openCopy}
                onOpenChange={setOpenCopy}
                handleConfirm={() => {
                  setLoading(true)
                  setTimeout(() => {
                    setLoading(false)
                    setOpenCopy(false)
                  }, 500)
                }}
                className='max-w-md'
                title={`复制问卷`}
                desc={<>你确定要复制这个问卷吗?</>}
                confirmText='复制'
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default QuestionnaireHeader
