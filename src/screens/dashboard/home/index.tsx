import React, { useContext, FC } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ant-design/react-native";
import { AppContext } from "@src/contexts/AppContext";
import { NavigationNames } from "@src/constants/navigation-names";
import { useGetApiRequest } from "@src/hooks/useGetApiRequest";
import dashboardService from "@src/api/dashboard-service";
import { ScrollContainer } from "@src/components/scroll-container";
import { SearchBar, Tabs } from "@ant-design/react-native";
import List from "@ant-design/react-native/lib/list";
import Item, { Brief } from "@ant-design/react-native/lib/list/ListItem";
import styles from "./styles";

const defaultTags = [
  { id: "recommended-id", name: "Selections" },
  { id: "latest-id", name: "Latest" },
];

const TableContentItem: FC = ({ item, index }) => {
  const { state } = useContext(AppContext);
  const { navigate } = useNavigation();
  return (
    <ScrollContainer>
      <View key={`${item.title}-${index}`} style={{ paddingTop: 10 }}>
        {state?.isLoggedIn && <Text>Welcome {state?.userInfo.userName}</Text>}
        <Text>Content of {item.title}</Text>
        <Text>
          Here you can see the search result of each tag. It can be ordered by
          popularity or datetime.
        </Text>

        <List renderHeader={"TODAY"}>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Info)}>
            thumb of the audio 1
            <Brief>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </Brief>
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Info)}>
            thumb of the audio 2
            <Brief>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </Brief>
          </Item>
        </List>
        <List renderHeader={"YESTERDAY"}>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 12
            <Brief>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </Brief>
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 24
            <Brief>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </Brief>
          </Item>
        </List>
        <List renderHeader={"OCT 12, 2021"}>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 31
            <Brief>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </Brief>
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 52
          </Item>
        </List>
        <List renderHeader={"OCT 12, 2021"}>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
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
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 31
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 52
          </Item>
        </List>
        <List renderHeader={"OCT 12, 2021"}>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 31
            <Brief>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </Brief>
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 52
          </Item>
        </List>
        <List renderHeader={"OCT 12, 2021"}>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 31
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onPress={() => navigate(NavigationNames.Play)}>
            thumb of the audio 52
          </Item>
        </List>
      </View>
    </ScrollContainer>
  );
};

const Home: FC = () => {
  const { state } = useContext(AppContext);
  const { data, status, retry } = useGetApiRequest(
    dashboardService.getDashboard,
    { loggedIn: state.isLoggedIn },
  );
  const tagsToDisplay = data?.tags
    ? defaultTags.concat(data?.tags)
    : defaultTags;
  const tabs = tagsToDisplay.map(item => ({ title: item?.name }));
  console.log("tabs:", tabs);
  return (
    <View style={styles.container}>
      <SearchBar
        defaultValue=""
        placeholder="Input text to search..."
        cancelText="Cancel"
      />
      <Tabs tabs={tabs}>
        {tabs &&
          tabs?.map((item, index) => (
            <TableContentItem item={item} index={index} />
          ))}
      </Tabs>
    </View>
  );
};

export default Home;
