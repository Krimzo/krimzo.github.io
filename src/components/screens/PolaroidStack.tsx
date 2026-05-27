import React from 'react'
import { motion, useInView } from 'motion/react'
import type { Screen } from '~/types'
import { cn } from '~/lib/utils'
import PolaroidCard from './PolaroidCard'
import ScreenGalleryModal from './ScreenGalleryModal'

interface Props {
  screens: Screen[]
  title: string
  description?: string
  className?: string
}

// 生成随机旋转角度
const generateRotations = (count: number) => Array.from({ length: count }, () => Math.random() * 20 - 10)

const PolaroidStack: React.FC<Props> = ({ screens, title, description, className }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [shouldRenderModal, setShouldRenderModal] = React.useState(false)
  const [selectedScreenIndex, setSelectedScreenIndex] = React.useState(0)
  const [clickedScreenIndex, setClickedScreenIndex] = React.useState<number | null>(null)
  const openTimerRef = React.useRef<number | null>(null)
  const closeTimerRef = React.useRef<number | null>(null)

  // 为每张照片生成固定的旋转角度
  const screenRotations = React.useMemo(() => generateRotations(screens.length), [screens.length])

  const handleScreenClick = (index: number) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }

    setShouldRenderModal(true)
    setClickedScreenIndex(index)
    setSelectedScreenIndex(index)

    openTimerRef.current = window.setTimeout(() => {
      setIsModalOpen(true)
      openTimerRef.current = null
    }, 50)
  }

  const handleModalClose = () => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }

    setIsModalOpen(false)

    closeTimerRef.current = window.setTimeout(() => {
      setClickedScreenIndex(null)
      setShouldRenderModal(false)
      closeTimerRef.current = null
    }, 200)
  }

  React.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current)
      }

      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  return (
    <>
      <motion.div ref={ref} className={cn('relative perspective-1000 ml-4 flex flex-wrap items-center ', className)}>
        {screens.map((screen, index) => (
          <div key={typeof screen.src === 'string' ? screen.src : screen.src.src} onClick={() => handleScreenClick(index)}>
            <PolaroidCard
              screen={screen}
              index={index}
              totalScreens={screens.length}
              rotation={screenRotations[index]}
              variant={screen.variant}
              isVisible={isInView}
              isClicked={clickedScreenIndex === index}
            />
          </div>
        ))}
      </motion.div>

      {shouldRenderModal && (
        <ScreenGalleryModal
          screens={screens}
          title={title}
          description={description}
          isOpen={isModalOpen}
          onClose={handleModalClose}
          initialIndex={selectedScreenIndex}
        />
      )}
    </>
  )
}

export default PolaroidStack
