import { ChangeEvent, KeyboardEvent, memo, useCallback, VFC } from 'react';

import classes from './TodoInput.module.scss';

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  typing: boolean;
  setTyping: React.Dispatch<React.SetStateAction<boolean>>;
  onAdd: (text: string) => void;
};

export const TodoInput: VFC<Props> = memo((props) => {
  const { text, setText, typing, setTyping, onAdd } = props;

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setText(e.target.value), [setText]);
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!text) return;
    if (e.key !== 'Enter' || typing) return;
    onAdd(text);
    setText('');
  };

  return (
    <div className={classes.block}>
      <input
        className={classes.input}
        type="text"
        placeholder="Enterで入力する"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setTyping(true)}
        onCompositionEnd={() => setTyping(false)}
      />
    </div>
  );
});