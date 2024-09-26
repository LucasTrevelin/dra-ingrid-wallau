import { useRef } from 'react'
import * as S from './InsideTopics.styled'
import { TInsideTopics } from './InsideTopics.types'
import { motion } from 'framer-motion'

export const InsideTopics: React.FC<TInsideTopics> = ({ contentTopics }) => {
  const scrollRef = useRef(null)

  return (
    <S.Container>
      {contentTopics.map((topic) => (
        <>
          <S.TopicContainer
            key={`topic-${topic.title}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, once: true }}
            transition={{ ease: 'linear', delay: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ ease: 'linear', delay: 0.5 }}
            >{`${topic.letter}.`}</motion.span>
            <motion.img
              src={topic.imageLink}
              alt={`${topic.title}-symbol`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ ease: 'linear', delay: 0.5 }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ ease: 'linear', delay: 0.5 }}
            >
              {' '}
              {`${topic.title}:`}
            </motion.span>
          </S.TopicContainer>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, once: true }}
            transition={{ ease: 'linear', delay: 0.5 }}
          >
            {topic.itemsList.map((item) => (
              <motion.li
                key={`item-${item}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef, once: true }}
                transition={{ ease: 'linear', delay: 0.5 }}
              >{`${item};`}</motion.li>
            ))}
          </motion.ul>
        </>
      ))}
    </S.Container>
  )
}
