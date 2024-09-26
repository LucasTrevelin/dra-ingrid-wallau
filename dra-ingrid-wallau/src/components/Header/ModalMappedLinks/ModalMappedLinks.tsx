import React from 'react'
import { TModalMappedLinksProps } from './ModalMappedLinks.types'

import * as S from './ModalMappedLinks.styled'
import { Link } from '../Link'
import { AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export const ModalMappedLinks: React.FC<TModalMappedLinksProps> = ({
  mappedLinks,
  isOpen = true,
  additionalAction
}) => {
  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <S.LinksWrapper
          className='dialog'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <S.CloseContainer>
            <S.Button onClick={additionalAction}>
              <X size={'20px'} />
            </S.Button>
          </S.CloseContainer>
          {mappedLinks.map(({ title, variant }) => (
            <Link
              key={`link-${title}`}
              title={title}
              variant={variant}
              additionalAction={additionalAction}
            />
          ))}
        </S.LinksWrapper>
      )}
    </AnimatePresence>
  )
}
