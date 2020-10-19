import React from 'react';
import { Text,View, Dimensions, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const cellWidth = width * 0.3;

export default function App() {
  const [isSingle, setIsSingle] = React.useState(false);
  const [selectIndex, setSelectIndex] = React.useState(null);
  return (
    <View Style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>{ isSingle ? '单选' : '多选' }</Text>
        <Switch
          style={{ marginLeft: 10 }}
          value={isSingle}
          onValueChange={setIsSingle}
        />
      </View>
      <View style={styles.list}>
        {isSingle
        ? [...new Array(9)].map((_, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => setSelectIndex(i)}
                style={[
                  styles.cell,
                  selectIndex === i && { backgroundColor: 'green' },
                ]}
              />
            );
          })
        : [...new Array(9)].map((_, i) => {
          return <Cell key={i} />;
        })}
      </View>
    </View>
  )
}

function Cell() {
  const [selected, setSelected] = React.useState(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={[styles.cell, selected && { backgroundColor: 'green' }]}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ccc',
    justifyContent: 'space-around',
    borderRadius: 5, // 设置圆角
    padding: 5
  },
  cell: {
    width: cellWidth,
    height: cellWidth,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 5
  },
});

// 暗号：明确状态归属，合理切分组件
