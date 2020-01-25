import React, {useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Text, Form, Item, Input, Icon} from 'native-base';
import {AuthContext} from '../../context/Auth/AuthContext';

const FormLogin = () => {
  const {isLogin, setAuthForm, authForm} = useContext(AuthContext);
  const _renderLogin = () => {
    if (!isLogin) {
      return (
        <View>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              onChangeText={e => onChangeText(e, 'name')}
              value={authForm.name}
              placeholder="Nama"
            />
          </Item>
        </View>
      );
    }
    return;
  };
  const onChangeText = (e, name) => {
    setAuthForm(prevState => ({
      ...prevState,
      [name]: e,
    }));
  };
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      const login = {
        email: '',
        password: '',
      };
      const register = {
        name: '',
        email: '',
        password: '',
      };
      const form = isLogin ? login : register;
      setAuthForm(form);
    }
    return () => {
      console.log('Unmounting');
      isCancelled = true;
    };
  }, [isLogin, setAuthForm]);
  return (
    <View style={styles.form}>
      <Form>
        {_renderLogin()}
        <View>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              onChangeText={e => onChangeText(e, 'email')}
              value={authForm.email}
              autoCompleteType="email"
              placeholder="Email"
            />
          </Item>
        </View>
        <View>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              secureTextEntry={true}
              onChangeText={e => onChangeText(e, 'password')}
              value={authForm.password}
              placeholder="Password"
            />
          </Item>
        </View>
      </Form>
    </View>
  );
};

export default FormLogin;
