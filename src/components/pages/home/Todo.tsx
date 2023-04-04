import { useCallback, useState } from 'react';
import classes from './Todo.module.scss';

import { Item } from '../../types/item';

import { TodoInput } from '../../blocks/TodoInput'; //コンポーネント読み込み
import { TodoAdd } from '../../blocks/TodoAdd'; //コンポーネント読み込み
import { TodoDones } from '../../blocks/TodoDones'; //コンポーネントの読み込み

const getKey = () => Math.random().toString(32).substring(2); // 0〜1未満の乱数字を取得して、数字を32進法に文字列に変換。前から３番目から文字を抽出

export const Todo = () => {
  const [items, setItems] = useState<Array<Item>>([{ key: getKey(), text: 'これはダミーのTODOです', done: false }]);
  const [itemsDone, setItemsDone] = useState<Array<Item>>([]);
  const [text, setText] = useState<string>('');
  const [typing, setTyping] = useState<boolean>(false);

  const onAdd = useCallback(
    (inputText: string) => {
      setItems([...items, { key: getKey(), text: inputText, done: false }]);
    },
    [items]
  );

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <h1 className={classes.heading}>やることリスト</h1>
          <TodoInput onAdd={onAdd} text={text} setText={setText} typing={typing} setTyping={setTyping} />
          <TodoAdd items={items} setItems={setItems} itemsDone={itemsDone} setItemsDone={setItemsDone} />
        </div>
        <TodoDones itemsDone={itemsDone} />
      </div>
    </div>
  );
};