import React, { FC } from 'react'
import styles from '../../styles'
import { View, Text } from '@react-pdf/renderer'
import { Profile } from '../../Domain/Profile'

type Props = Readonly<{
    about: Profile['about']
}>

export const RightSection: FC<Props> = ({ about }) => {
  return (
    <View style={styles.section_right}>
      <Text>{about}</Text>
    </View>
  )
}