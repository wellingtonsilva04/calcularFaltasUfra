import React, { useState } from 'react';
import { View } from 'react-native';
import { Header, SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

// import { Container } from './styles';

export default function HeaderSearchSwitch(props) {
  const [selectHeader, setSelectHeader] = useState(false);
  const { search, setSearch } = props;

  if (selectHeader) {
    return <SearchBar
      platform='android'
      placeholder='pesquisar'
      onChangeText={(text) => setSearch(text)}
      onCancel={() => setSelectHeader(false)}
      value={search}
    />
  }
  return (
    <Header
      statusBarProps={{ barStyle: 'light-content' }}
      placement="left"
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'DISCIPLINAS', style: { color: '#fff' } }}
      rightComponent={
        <Button
          icon={
            <Icon
              name="md-search"
              size={20}
              color="white"
              onPress={() => setSelectHeader(!selectHeader)}
            />
          }
          buttonStyle={{ backgroundColor: 'transparent' }}
        />
      }
      containerStyle={{
        backgroundColor: '#616161',
      }}
    />
  );

}
