import React, { useCallback } from 'react';
import { Container, Header, DragOver } from '@pages/Channel/styles';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import axios from 'axios';
import useSWR, { useSWRInfinite } from 'swr';
import { IDM } from '@typings/db';
import { useParams } from 'react-router';
const Channel = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const [chat, setChat, onChangeChat] = useInput('');

  const onSubmitForm = useCallback((e) => {}, [chat]);

  return (
    <Container>
      <Header>채널!</Header>
      <ChatList></ChatList>
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm}></ChatBox>
    </Container>
  );
};

export default Channel;
