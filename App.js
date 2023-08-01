import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import AllExpenses from "./Screen/AllExpenses";
import ExpenseOverview from "./Screen/ExpensesOverview";
import RecentExpense from "./Screen/RecentExpense";
import IconButton from "./UI/IconButton";
import store from './Store/Redux'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Nested() {
  return (<>
    <StatusBar style='light'/>
    <Tab.Navigator screenOptions={({navigation})=>({
      headerStyle:{backgroundColor:'#940CE4'},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor:"#4808A7"},
      tabBarActiveTintColor:'white',
      tabBarActiveBackgroundColor:"#9075B5",
      headerRight:({tintColor})=> <IconButton icon='add' onPress={()=>navigation.navigate('ExpenseOverview')}color={tintColor} size={28}/>
    })}>
      <Tab.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
          tabBarLabel:'Recent',
          title:"Recent Expenses",
        }}
      />
      <Tab.Screen name="AllExpense" component={AllExpenses}
       options={{
        title:"All Expenses",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" color={color} size={size} />
        ),
        tabBarLabel:'ALL'
      }}
      />
    </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle:{backgroundColor:'#940CE4'},
          headerTintColor:'white',
        }
      }>
        <Stack.Screen
          name="Nested"
          component={Nested}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} 
        options={{
          presentation:'modal'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
