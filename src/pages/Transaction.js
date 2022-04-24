import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import KeyStatsCard from '../components/KeyStatsCard';
import { ArrowCircleRightIcon } from '../components/Icons';

function Transaction() {
  const [keyStats, setKeyStats] = useState({ title: '', subtitle: '' });
  const { state } = useLocation();

  useEffect(() => {
    setKeyStats({ title: `Block ${state.blockNumber}` });
  }, [state]);

  const list = [
    {
      id: 0,
      title: 'Block Number',
      value: 'blockNumber',
    },
    {
      id: 1,
      title: 'Confirmations',
      value: 'confirmations',
    },
    {
      id: 2,
      title: 'Gas Used',
      value: 'gasUsed',
    },
    {
      id: 3,
      title: 'Gas',
      value: 'gas',
    },
    {
      id: 4,
      title: 'Timestamp',
      value: 'timeStamp',
    },
    {
      id: 5,
      title: 'Target Address',
      value: 'to',
    },
  ];
  return (
    <div className="container-fluid transactions p-0">
      <KeyStatsCard Title={keyStats.title} Subtitle={keyStats.subtitle} />
      {
        Object.keys(state).length !== 0 && (
          <ul className="data-details p-0 m-0">
            {list.map((item) => (
              <li key={item.id} className="card rounded-0 d-flex flex-row justify-content-between p-4 text-white">
                <p className="m-0 text-white">
                  {item.title}
                </p>
                <div className="d-flex gap-1 align-center" style={{ lineBreak: 'anywhere' }} >
                  {state[item.value]}
                  <div className="d-grid align-content-center icon ms-2">

                    <ArrowCircleRightIcon />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
}

export default Transaction;
