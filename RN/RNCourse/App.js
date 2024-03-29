import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import { useState } from 'react';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
      setCourseGoals(currentCourseGoals => [...currentCourseGoals,
          {text: enteredGoalText, id: Math.random().toString()}
      ]);
  }

  function deleteGoalHandler() {
    console.log('DELETE');
  }

  return (
    <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text}
                               onDeleteItem={deleteGoalHandler}/>
            }}
            keyExtractor={(item,index) => {
              return item.id;
            }}
            alwaysBounceVertical={false} />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop : 50,
        paddingHorizontal: 16,
    },

    goalsContainer: {
        flex: 5,
    },

});