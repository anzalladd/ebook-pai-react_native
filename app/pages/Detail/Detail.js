import React, {useEffect, useState} from 'react';
import {
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Container,
  Content,
} from 'native-base';
import styles from './styles';
import Bab1 from '../../components/Bab1';
import Bab2 from '../../components/Bab2';
import Bab3 from '../../components/Bab3';
import Bab4 from '../../components/Bab4';
import Bab5 from '../../components/Bab5';
import Bab6 from '../../components/Bab6';
import Bab7 from '../../components/Bab7';
import Bab8 from '../../components/Bab8';
import Bab9 from '../../components/Bab9';
import Bab10 from '../../components/Bab10';

const Detail = props => {
  const [id, setId] = useState(1);

  const goBack = () => {
    props.navigation.goBack();
  };
  const renderDetail = () => {
    switch (id) {
      case 1:
        return <Bab1 />;
      case 2:
        return <Bab2 />;
      case 3:
        return <Bab3 />;
      case 4:
        return <Bab4 />;
      case 5:
        return <Bab5 />;
      case 6:
        return <Bab6 />;
      case 7:
        return <Bab7 />;
      case 8:
        return <Bab8 />;
      case 9:
        return <Bab9 />;
      case 10:
        return <Bab10 />;
    }
  };
  useEffect(() => {
    const idMateri = props.navigation.getParam('id', 1);
    setId(idMateri);
    return console.log('clean up');
  }, [id, props.navigation]);
  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
      <Content style={styles.container}>{renderDetail()}</Content>
    </Container>
  );
};

export default Detail;
