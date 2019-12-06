import React from 'react'; // eslint-disable-line no-unused-vars
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export const AccordionItemEditor = (props) => {
  const {
    attributes: {
      blockClass,
      title,
      content,
    },
    actions: {
      onChangeTitle,
      onChangeContent,
    },
  } = props;

  return (
    <div className={blockClass}>
      <div className={`${blockClass}__head is-active`}>
        <RichText
          placeholder={__('Add title', 'eightshift-boilerplate')}
          onChange={onChangeTitle}
          value={title}
        />
      </div>
      <div className={`${blockClass}__content is-active`}>
        <div className={`${blockClass}__content-inner`}>
          <RichText
            placeholder={__('Add content', 'eightshift-boilerplate')}
            onChange={onChangeContent}
            value={content}
          />
        </div>
      </div>
    </div>
  );
};
