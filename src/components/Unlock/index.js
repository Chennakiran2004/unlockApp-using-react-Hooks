import {useState} from 'react'

import {
  Container,
  LockImageContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => setIsUnlocked(previousState => !previousState)

  return (
    <Container>
      <LockImageContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </LockImageContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </Container>
  )
}

export default Unlock
