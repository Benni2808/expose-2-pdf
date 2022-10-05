import { View, Text, Image } from '@react-pdf/renderer'
import { FC } from 'react'
import type { Profile as ProfileType } from '../../Domain/Profile'
import styles from '../../styles'

type Props = Readonly<{
    profile: ProfileType
}>

export const Profile: FC<Props> = ({ profile }) => {
  return (
    <View style={styles.profile_container}>
      <Image style={styles.profile_img} src={profile.profileImageURL} />

      <View
        style={{
          justifyContent: 'center',
        }}
      >
        <Text style={styles.name_text}>{profile.name}</Text>
      </View>
      <Text style={styles.profession_text}>{profile.profession}</Text>
      <View style={styles.profile_line} />
    </View>
  )
}

const LeftSection: FC<Props> = ({ profile }) => {
  return (
    <View style={styles.section_left}>
      <Profile profile={profile} />
    </View>
  )
}

export default LeftSection