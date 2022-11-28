import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import React from 'react';

interface Props {
  node: {
    attrs: {
      language: string;
    };
  };
  updateAttributes: ({ language }: { language: string }) => void;
  extension: any;
}

const Codeblock = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}: Props) => {
  return (
    <NodeViewWrapper className='code-block'>
      <select
        contentEditable={false}
        defaultValue={defaultLanguage}
        className='rounded-md px-2 py-1 bg-gray-600 text-white font-medium font-mono'
        onChange={event => updateAttributes({ language: event.target.value })}
      >
        <option value='null'>auto</option>
        <option disabled>—</option>
        {extension.options.lowlight.listLanguages().map((lang: string, index: number) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <pre>
        <NodeViewContent as='code' />
      </pre>
    </NodeViewWrapper>
  );
};

export default Codeblock;
