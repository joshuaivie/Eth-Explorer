import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { GetTransactions } from '../redux/transaction/transaction';

function Order() {
  const [selectedOrder, setSelectedOrder] = useState('asc');
  const dispatch = useDispatch();

  const options = [
    {
      id: 1,
      value: 'asc',
      label: 'Ascending',
    },
    {
      id: 1,
      value: 'desc',
      label: 'Descending',
    },
  ];

  const handleChange = (e) => {
    setSelectedOrder(e.value);

    if (e.value === 'asc') {
      dispatch(GetTransactions({ order: 'asc' }));
    }
    if (e.value === 'desc') {
      dispatch(GetTransactions({ order: 'desc' }));
    }
  };

  const selectStyle = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#2e4475',
      border: 'none',
      minHeight: '0',
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingTop: '0',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '0',
    }),
  };

  return (
    <div className="filter-box d-flex gap-1 bg-dark-blue align-center px-4 py-1">
      <h6 className="d-grid align-content-center text-white m-0 font-lato fw-bold">ORDER BY</h6>
      <Select
        placeholder="Order by"
        value={options.find((option) => option.value === selectedOrder)}
        options={options}
        onChange={handleChange}
        className="bg-transparent font-lato fw-bold"
        styles={selectStyle}
      />
    </div>
  );
}

export default Order;
