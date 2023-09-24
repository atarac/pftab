<?php
/**
 * Plugin Name:       PF Tab
 * Description:       Create tab block.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            PINKFREAK
 * Author URI:        https://pink-freak.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pf-tab
 */

function create_block_pf_tab_block_init() {
	register_block_type( __DIR__ . '/build/tab-container' );
	register_block_type( __DIR__ . '/build/individual-tab' );
}
add_action( 'init', 'create_block_pf_tab_block_init' );


// フロントエンド用
function load_custom_script() {
	$plugin_url = plugin_dir_url( __FILE__ );
	wp_enqueue_script( 'tab-switcher', $plugin_url . 'tab-switcher.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'load_custom_script' );


// 管理画面用
// function load_custom_admini_script() {
// 	$plugin_url = plugin_dir_url( __FILE__ );
// 	wp_enqueue_script( 'tab-switcher-admini', $plugin_url . 'tab-switcher.js', array(), '1.0', true );
// }
// add_action( 'admin_enqueue_scripts', 'load_custom_admini_script' );


// enqueue_block_editor_assets

// function wdl_pf_Slider_block_init() {
// 	register_block_type( __DIR__ . '/build' );
//  }
//  add_action( 'init', 'wdl_pf_Slider_block_init' );

// 管理画面用
// function load_custom_admin_script() {
// 	$plugin_url = plugin_dir_url( __FILE__ );
// 	wp_enqueue_script( 'tab-switcher-admin', $plugin_url . 'tab-switcher.js', array(), '1.0', true );
// }
// add_action('enqueue_block_editor_assets', 'load_custom_admin_script');
 
//  function enqueue_pfslider_front_assets() {
// 		 wp_enqueue_style('swiper-style-front', plugins_url('swiper-bundle.min.css', __FILE__));
// 		 wp_enqueue_script('swiper-script-front', plugins_url('swiper-bundle.min.js', __FILE__), array(), null, true);
// 		 wp_enqueue_script('pfslider-front-script', plugins_url('front.js?ver=1.0.3', __FILE__), array('swiper-script-front'), null, true);
//  }
//  add_action('wp_enqueue_scripts', 'enqueue_pfslider_front_assets');
