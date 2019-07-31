import { SnapCarousel, themes } from '@nextpress/common';
import { ThemeProvider } from 'emotion-theming';

/**
 * BLOCK: nextpress/example
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;
const { registerBlockType } = wp.blocks;

registerBlockType('nextpress/snap-carousel', {
  title: __('Snap Carousel'),
  icon: 'format-gallery',
  category: 'common',
  keywords: [__('nextpress — Snap Carousel'), __('Snap Carousel')],
  attributes: {
    align: {
      type: 'string',
      default: 'full',
    },
  },
  supports: {
    align: false,
  },

  edit: function(): React.ReactNode {
    return (
      <ThemeProvider theme={themes.light}>
        <SnapCarousel />
        <InspectorControls>
          <PanelBody title="test">test</PanelBody>
        </InspectorControls>
      </ThemeProvider>
    );
  },

  save: function() {
    return null;
  },
});
