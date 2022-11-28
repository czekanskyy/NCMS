'use client';

import { Editor } from '@tiptap/react';
import { MouseEventHandler, useCallback, useState } from 'react';
import { webFonts } from '@/utils/webFonts';

import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaCode,
  FaFont,
  FaHighlighter,
  FaImage,
  FaItalic,
  FaLevelDownAlt,
  FaLink,
  FaListOl,
  FaListUl,
  FaMinus,
  FaPalette,
  FaParagraph,
  FaPlus,
  FaQuoteLeft,
  FaRedo,
  FaRemoveFormat,
  FaStrikethrough,
  FaSubscript,
  FaSuperscript,
  FaUnderline,
  FaUndo,
} from 'react-icons/fa';

const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const toggleLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;

    // exist
    if (previousUrl)
      if (previousUrl !== '') {
        editor.chain().focus().extendMarkRange('link').unsetLink().run();
        return;
      }

    const url = window.prompt('URL', 'https://');

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const [fontsVisible, setFontsVisible] = useState(false);

  const changeActiveFont: MouseEventHandler<HTMLButtonElement> = e => {
    setFontsVisible(false);
    editor.chain().focus().setFontFamily(e.currentTarget.textContent!).run();
  };

  return (
    <nav className='w-full gap-2 p-2 border-b z-10 toolbar flex flex-wrap'>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaBold />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaItalic />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaUnderline />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaStrikethrough />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        disabled={!editor.can().chain().focus().toggleSuperscript().run()}
        className={editor.isActive('superscript') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaSuperscript />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        disabled={!editor.can().chain().focus().toggleSubscript().run()}
        className={editor.isActive('subscript') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaSubscript />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaHighlighter />
      </button>
      <div className='relative btn-editor'>
        <div className='btn-editor absolute left-0 top-0'>
          <FaPalette style={{ color: editor.getAttributes('textStyle').color || '#000000' }} />
        </div>
        <input
          type='color'
          onInput={event => editor.chain().focus().setColor(event.currentTarget.value).run()}
          className='w-9 h-9 opacity-0 cursor-pointer'
          value={editor.getAttributes('textStyle').color || '#000000'}
        />
      </div>

      <div className='w-px h-9 bg-gray-100 mx-1' />

      <div className='relative'>
        <button
          type='button'
          onClick={() => setFontsVisible(!fontsVisible)}
          className={fontsVisible ? 'btn-select-active w-32' : 'btn-select w-32'}
          style={{ fontFamily: editor.getAttributes('textStyle').fontFamily || 'Arial' }}
        >
          {editor.getAttributes('textStyle').fontFamily?.slice(0, 8) || 'Arial'}
          <svg className='ml-2 w-4 h-4' aria-hidden='true' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
          </svg>
        </button>
        <div className={`${!fontsVisible && 'hidden'} absolute top-10 left-0 z-10 w-max bg-white rounded-lg divide-gray-100 shadow grid gap-y-1 p-1`}>
          {webFonts.map((font, i) => (
            <button type='button' key={i} className='btn-font' style={{ fontFamily: font }} onClick={changeActiveFont}>
              {font}
            </button>
          ))}
        </div>
      </div>

      <div className='w-px h-9 bg-gray-100 mx-1' />

      <button
        type='button'
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaParagraph />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        H1
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        H2
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        H3
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        H4
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        H5
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        H6
      </button>
      <div className='w-px h-9 bg-gray-100 mx-1' />
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaListUl />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaListOl />
      </button>
      <button type='button' onClick={toggleLink} className={editor.isActive('link') ? 'btn-editor-active' : 'btn-editor'}>
        <FaLink />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaCode />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'btn-editor-active' : 'btn-editor'}
      >
        {'{ }'}
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaQuoteLeft />
      </button>
      <button type='button' onClick={() => editor.chain().focus().setHardBreak().run()} className='btn-editor'>
        <FaLevelDownAlt />
      </button>
      <button type='button' onClick={() => editor.chain().focus().setHorizontalRule().run()} className='btn-editor'>
        —
      </button>
      <button type='button' onClick={addImage} className='btn-editor'>
        <FaImage />
      </button>

      <div className='w-px h-9 bg-gray-100 mx-1' />

      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaAlignLeft />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaAlignCenter />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaAlignRight />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaAlignJustify />
      </button>
      <div className='w-px h-9 bg-gray-100 mx-1' />
      <button type='button' onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()} className='btn-editor'>
        <FaUndo />
      </button>
      <button type='button' onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()} className='btn-editor'>
        <FaRedo />
      </button>
      <div className='w-px h-9 bg-gray-100 mx-1' />
      <button type='button' onClick={() => editor.chain().focus().clearNodes().run()} className='btn-editor'>
        <FaRemoveFormat />
      </button>
    </nav>
  );
};

export default EditorToolbar;
