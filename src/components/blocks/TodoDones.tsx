import { memo, VFC } from 'react';

import classes from './TodoDones.module.scss';

import { Item } from '../types/item';

type Props = {
  itemsDone: Array<Item>;
};

export const TodoDones: VFC<Props> = memo((props) => {
  const { itemsDone } = props;

  return (
    <div className={classes.complete}>
      <div className={classes.todoDoneHeading}>完了済 一覧</div>
      <ul className={classes.list}>
        {itemsDone.map((itemDone) => (
          <li key={itemDone.key} className={classes.item}>
            <span className={classes.done}>完了済</span>
            {itemDone.text}
          </li>
        ))}
      </ul>
    </div>
  );
});