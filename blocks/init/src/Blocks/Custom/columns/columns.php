<?php
/**
 * Template for the Columns Block.
 *
 * @package EightshiftBoilerplate
 */

use EightshiftBoilerplateVendor\EightshiftLibs\Helpers\Components;

$block_class = $attributes['blockClass'] ?? '';

$component_class = Components::classnames([
  $block_class,
  $attributes['gutter'] ? Components::responsive_selectors($attributes['gutter'], 'gutter', $block_class) : '',
  $attributes['verticalSpacing'] ? Components::responsive_selectors($attributes['verticalSpacing'], 'vertical-spacing', $block_class) : '',
]);
?>

<div class="<?php echo \esc_attr( $component_class ); ?>">
  <?php echo \wp_kses_post( $inner_block_content ); ?>
</div>