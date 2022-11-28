'use client';

import React, { useEffect } from 'react';

import { EditorContent, ReactNodeViewRenderer, useEditor } from '@tiptap/react';
import Codeblock from './Codeblock';
import EditorToolbar from './EditorToolbar';

import './codeblock.styles.scss';

import { lowlight } from 'lowlight/lib/common.js';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import Link from '@tiptap/extension-link';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Color from '@tiptap/extension-color';
import Gapcursor from '@tiptap/extension-gapcursor';
import History from '@tiptap/extension-history';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import CodeBlock from '@tiptap/extension-code-block';
import Document from '@tiptap/extension-document';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Code from '@tiptap/extension-code';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';

interface Props {
  handler: (content?: string) => void;
}

export default ({ handler }: Props) => {
  const editor = useEditor({
    extensions: [
      Blockquote,
      Bold,
      BulletList,
      Code,
      CodeBlock,
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(Codeblock);
        },
      }).configure({ lowlight, HTMLAttributes: { class: 'codeblock' } }),
      Color,
      Document,
      Dropcursor,
      FontFamily,
      Gapcursor,
      HardBreak,
      Heading,
      Highlight,
      History,
      HorizontalRule,
      Image,
      Italic,
      Link.configure({
        openOnClick: false,
      }),
      ListItem,
      OrderedList,
      Paragraph,
      Strike,
      Subscript,
      Superscript,
      Text,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Underline,
    ],
  });

  useEffect(() => {
    handler(editor?.getHTML());
  }, [editor?.getHTML()]);

  return (
    <>
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} className='editor reset' style={{ fontFamily: 'Arial', fontSize: '14px' }} />
    </>
  );
};
