'use client';

import { nc_comments } from '@prisma/client';
import { useState } from 'react';

interface Props {
  comments: nc_comments[];
}

const deleteComment = async (id: string) => {
  try {
    const res = await fetch('http://localhost:3000/api/deleteComment', {
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if (res.status === 200) return true;
  } catch (error: any) {
    console.error('Błąd usuwania komentarza: ', error.message);
  }
};

const CommentsData = ({ comments }: Props) => {
  const [localComments, setLocalComments] = useState(comments);

  const handler = async (id: string) => {
    const res = await deleteComment(id);
    if (res) setLocalComments(localComments.filter(comment => comment.id !== id));
  };

  return (
    <>
      {localComments.map(comment => (
        <tr key={comment.id} className='table-body'>
          <td className='table-data'>{comment.id}</td>
          <td className='table-data'>{comment.content}</td>
          <td className='table-data'>{comment.author}</td>
          <td className='table-data text-right text-red-500 font-medium'>
            <button onClick={async () => handler(comment.id)}>Usuń</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CommentsData;
