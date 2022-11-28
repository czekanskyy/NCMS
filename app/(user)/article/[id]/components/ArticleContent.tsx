'use client';

import hljs from 'highlight.js';
import { useEffect } from 'react';

import 'highlight.js/styles/base16/onedark.css';
interface Props {
  content: string;
}

const ArticleContent = ({ content }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <article className='max-w-4xl w-full reset' dangerouslySetInnerHTML={{ __html: content }}></article>;
};

export default ArticleContent;
