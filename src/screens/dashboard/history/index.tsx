import React from "react";
import { useLogin } from "@src/hooks/useLogin";
import List from "@ant-design/react-native/lib/list";
import Item, { Brief } from "@ant-design/react-native/lib/list/ListItem";
import { ScrollContainer } from "@src/components/scroll-container";
import { SearchBar } from "@ant-design/react-native";

const History: React.FC = () => {
  useLogin();
  return (
    <ScrollContainer>
      <SearchBar
        defaultValue=""
        placeholder="Input text to search..."
        cancelText="Cancel"
      />
      <List renderHeader={"Today"}>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 1
          <Brief>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </Brief>
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 2
          <Brief>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </Brief>
        </Item>
      </List>
      <List renderHeader={"YESTERDAY"}>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 12
          <Brief>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
          </Brief>
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 24
          <Brief>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
          </Brief>
        </Item>
      </List>
      <List renderHeader={"OCT 12, 2021"}>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 31
          <Brief>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
          </Brief>
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 52
        </Item>
      </List>
      <List renderHeader={"OCT 12, 2021"}>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 31
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 52
        </Item>
      </List>
      <List renderHeader={"OCT 12, 2021"}>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 31
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 52
        </Item>
      </List>
      <List renderHeader={"OCT 12, 2021"}>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 31
          <Brief>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </Brief>
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 52
        </Item>
      </List>
      <List renderHeader={"OCT 12, 2021"}>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 31
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb of the audio 52
        </Item>
      </List>
    </ScrollContainer>
  );
};

export default History;
