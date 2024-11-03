'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from './getUser';

const Posts = () => {
  const { data } = useQuery({ queryKey: ['poosts'], queryFn: getPosts });

  const clientValue = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  return (
    <div className='flex flex-row' style={{ display: 'flex' }}>
      <div>
        {data?.map(({ title, id }) => {
          return <div key={id}>{title}</div>;
        })}
      </div>
      <div>
        {clientValue.data?.map(({ title, id }) => {
          return <div key={id}>{title}</div>;
        })}
      </div>
    </div>
  );
};

export default Posts;
