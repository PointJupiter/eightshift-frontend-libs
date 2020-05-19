/* eslint-disable no-unused-vars */

import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PanelBody, TabPanel, Dashicon } from '@wordpress/components';
import { ColumnsResponsiveTabContent } from './columns-responsive-tab-content';

export const ColumnsOptions = ({ attributes, actions }) => {
  const {
    gutter,
    horizontalSpacing,
  } = attributes;

  const {
    onChangeGutterLarge,
    onChangeHorizontalSpacingLarge,
    onChangeGutterDesktop,
    onChangeHorizontalSpacingDesktop,
    onChangeGutterTablet,
    onChangeHorizontalSpacingTablet,
    onChangeGutterMobile,
    onChangeHorizontalSpacingMobile,
  } = actions;

  return (
    <PanelBody title={__('Columns Details', 'eightshift-boilerplate')}>
      <TabPanel
        className="custom-button-tabs"
        activeClass="button button-primary"
        tabs={[
          {
            name: 'large',
            title: <Dashicon icon="desktop" />,
            className: 'tab-large button button-secondary custom-button-with-icon',
          },
          {
            name: 'desktop',
            title: <Dashicon icon="laptop" />,
            className: 'tab-desktop button button-secondary custom-button-with-icon',
          },
          {
            name: 'tablet',
            title: <Dashicon icon="tablet" />,
            className: 'tab-tablet button button-secondary custom-button-with-icon',
          },
          {
            name: 'mobile',
            title: <Dashicon icon="smartphone" />,
            className: 'tab-mobile button button-secondary custom-button-with-icon',
          },
        ]
        }
      >
        {(tab) => (
          <Fragment>
            {tab.name === 'large' && (
              <Fragment>
                <br />
                <strong className="notice-title">{__('Large Layout Options', 'eightshift-boilerplate')}</strong>
                <p>{__('This options will only control large screens options.', 'eightshift-boilerplate')}</p>
                <br />
                <ColumnsResponsiveTabContent
                  gutter={gutter.large}
                  onChangeGutter={onChangeGutterLarge}
                  horizontalSpacing={horizontalSpacing.large}
                  onChangeHorizontalSpacing={onChangeHorizontalSpacingLarge}
                />
              </Fragment>
            )}
            {tab.name === 'desktop' && (
              <Fragment>
                <br />
                <strong className="notice-title">{__('Desktop Layout Options', 'eightshift-boilerplate')}</strong>
                <p>{__('This options will only control desktop screens options. If nothing is set, parent options will be used.', 'eightshift-boilerplate')}</p>
                <br />
                <ColumnsResponsiveTabContent
                  gutter={gutter.desktop}
                  onChangeGutter={onChangeGutterDesktop}
                  horizontalSpacing={horizontalSpacing.desktop}
                  onChangeHorizontalSpacing={onChangeHorizontalSpacingDesktop}
                />
              </Fragment>
            )}
            {tab.name === 'tablet' && (
              <Fragment>
                <br />
                <strong className="notice-title">{__('Tablet Layout Options', 'eightshift-boilerplate')}</strong>
                <p>{__('This options will only control tablet screens options. If nothing is set, parent options will be used.', 'eightshift-boilerplate')}</p>
                <br />
                <ColumnsResponsiveTabContent
                  gutter={gutter.tablet}
                  onChangeGutter={onChangeGutterTablet}
                  horizontalSpacing={horizontalSpacing.tablet}
                  onChangeHorizontalSpacing={onChangeHorizontalSpacingTablet}
                />
              </Fragment>
            )}
            {tab.name === 'mobile' && (
              <Fragment>
                <br />
                <strong className="notice-title ">{__('Mobile Layout Options', 'eightshift-boilerplate')}</strong>
                <p>{__('This options will only control mobile screens options. If nothing is set, parent options will be used.', 'eightshift-boilerplate')}</p>
                <br />
                <ColumnsResponsiveTabContent
                  gutter={gutter.mobile}
                  onChangeGutter={onChangeGutterMobile}
                  horizontalSpacing={horizontalSpacing.mobile}
                  onChangeHorizontalSpacing={onChangeHorizontalSpacingMobile}
                />
              </Fragment>
            )}
          </Fragment>
        )}
      </TabPanel>
    </PanelBody>
  );
};