import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

export type Payment = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: Date
  updateAt: Date
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'title',
    header: '问卷名称',
  },
  {
    accessorKey: 'isPublished',
    header: '发布状态',
    cell: ({ row }) => {
      const isPublished = row.getValue('isPublished')
      const formatted = isPublished ? '已发布' : '未发布'
      return formatted
    },
  },
  {
    accessorKey: 'answerCount',
    header: '回答数量',
  },
  {
    id: 'actions',
    header: '操作',
    cell: ({ row }) => {
      const payment = row.original
      console.log(
        '%c [ payment ]-37',
        'font-size:13px; background:#c47c7b; color:#ffc0bf;',
        payment
      )

      return (
        <div className='flex gap-2'>
          <Button>恢复</Button>
          <Button>彻底删除</Button>
        </div>
      )
    },
  },
]
