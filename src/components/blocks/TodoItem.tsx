import { memo, VFC } from 'react';

import classes from './TodoItem.module.scss';

import { Item } from '../types/item';

type Props = {
  item: Item;
  onCheck: (checkedItem: Item) => void;
};

export const TodoItem: VFC<Props> = memo((props) => {
  const { item, onCheck } = props;
  const handleChange = () => onCheck(item);
  return (
    <>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <label className={classes.block}>
        <span className={item.done ? `${classes.text_done} ${classes.text}` : `${classes.text}`}>{item.text}</span>
        <input type="checkbox" checked={item.done} onChange={handleChange} />
      </label>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
    </>
  );
});