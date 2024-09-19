import * as S from './InsideTopics.styled'
import { TInsideTopics } from './InsideTopics.types'

export const InsideTopics: React.FC<TInsideTopics> = ({ contentTopics }) => {
  return (
    <S.Container>
      {contentTopics.map((topic) => (
        <>
          <S.TopicContainer key={`topic-${topic.title}`}>
            <span>{`${topic.letter}.`}</span>
            <img src={topic.imageLink} alt={`${topic.title}-symbol`} />
            <span> {`${topic.title}:`}</span>
          </S.TopicContainer>
          <ul>
            {topic.itemsList.map((item) => (
              <li key={`item-${item}`}>{`${item};`}</li>
            ))}
          </ul>
        </>
      ))}
    </S.Container>
  )
}
