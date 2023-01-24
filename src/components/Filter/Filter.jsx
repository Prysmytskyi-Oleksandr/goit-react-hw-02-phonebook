// import { nanoid } from 'nanoid';
// import styles from './filter.module.scc';

const Filter = ({ filter, onChangeFilter }) => {
  //   const filterId = nanoid();
  return (
    <>
      <label>
        Find contact by name
        <input type="text" value={filter} onChange={onChangeFilter} />
      </label>
    </>
  );
};

export default Filter;
