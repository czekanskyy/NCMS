'use client';

import getUser from '@/utils/getUser';
import DOMPurify from 'dompurify';
import { FormEventHandler, KeyboardEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import TextEditor from './TextEditor';

interface FormData {
  title: string;
  content: string;
  authorId: string;
  thumbnail?: string;
  tags: string[];
}

const PostDataForm = () => {
  const user = getUser();

  const initialInputs = {
    title: '',
    content: '',
    authorId: user?.id,
    thumbnail: '',
    tags: [],
  };
  const [values, setValues] = useState<FormData>(initialInputs);
  const [tags, setTags] = useState<string[]>([]);

  const handleContentChange = (content?: string) => {
    if (content) setValues({ ...values, content });
  };

  useEffect(() => {
    setValues({ ...values, authorId: user?.id });
  }, [user?.id]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    try {
      const res = await fetch('https://localhost:3000/api/addPost', {
        body: JSON.stringify({ ...values, content: DOMPurify.sanitize(values.content) }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      if (res.status === 200) {
        alert('Pomyślnie opublikowano');
        const target = e.target as HTMLFormElement;
        target.submit();
      }
    } catch (error: any) {
      console.error('Błąd: ', error.message);
    }

    setValues(initialInputs);
    const target = e.target as HTMLFormElement;
    target.blur();
  };

  const handleTags: KeyboardEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    if (e.key === ' ') {
      const tag = e.currentTarget.value.toLowerCase().replace(' ', '');
      if (tags.length < 5)
        if (tag.length > 1 && !tags.includes(tag)) {
          setValues({ ...values, tags: [...tags, tag] });
          setTags([...tags, tag]);
        }
      e.currentTarget.value = '';
    }
  };

  const removeTag: MouseEventHandler<HTMLLIElement> = e => {
    const tag = e.currentTarget.textContent;
    setTags(tags.filter(i => i !== tag));
  };

  return (
    <form className='grid gap-y-8' onSubmit={handleSubmit}>
      {/* Title */}
      <div className='grid gap-y-2'>
        <label className='text-gray-500 font-medium uppercase'>Tytuł</label>
        <input
          type='text'
          className='px-4 py-2 text-2xl bg-white rounded-lg outline-none transition-all text-black'
          maxLength={60}
          value={values.title}
          onChange={e => setValues({ ...values, title: e.target.value })}
          required
        />
      </div>

      {/* Thumbnail */}
      <div className='grid gap-y-2'>
        <label className='text-gray-500 font-medium uppercase'>URL Miniaturki</label>
        <input
          type='text'
          className='px-4 py-2 bg-white rounded-lg outline-none transition-all text-black'
          value={values.thumbnail}
          onChange={e => setValues({ ...values, thumbnail: e.target.value })}
        />
      </div>

      {/* WYSIWYG Editor */}
      <div className='grid gap-y-2'>
        <label className='text-gray-500 font-medium uppercase'>Treść</label>
        <div className='bg-white rounded-lg'>
          <TextEditor handler={handleContentChange} />
        </div>
      </div>

      {/* Tags */}
      <div className='grid gap-y-2'>
        <label className='text-gray-500 font-medium uppercase'>
          Tagi <span className='text-xs text-gray-400'>(oddzielone spacją)</span>
          <p className='text-sm font-normal text-indigo-400'>
            Pozostało <span className='text-base font-medium'>{5 - tags.length}</span>
          </p>
        </label>
        <div>
          <ul className='flex gap-x-2 p-2 bg-white rounded-lg transition-all text-black'>
            {tags.map((tag, i) => (
              <li
                key={i}
                className='cursor-pointer flex items-center gap-x-1 bg-gray-100 w-max px-2 py-1 text-gray-800 rounded-md border border-gray-300 group'
                onClick={removeTag}
              >
                {tag}
                <TfiClose className='bg-gray-600 rounded-md p-1 w-5 h-5 transition-all group-hover:bg-gray-700 text-white' />
              </li>
            ))}
            <input type='text' className='outline-none flex-1' onKeyUp={handleTags} />
          </ul>
        </div>
      </div>

      <button
        type='submit'
        className='justify-self-end bg-blue-500 text-white px-4 py-2 font-medium rounded-lg transition-all outline-none hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600'
      >
        Opublikuj
      </button>
    </form>
  );
};

export default PostDataForm;
