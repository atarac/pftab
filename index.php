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
function load_custom_admin_script() {
	$plugin_url = plugin_dir_url( __FILE__ );
	wp_enqueue_script( 'tab-switcher-admin', $plugin_url . 'tab-switcher.js', array(), '1.0', true );
}
add_action( 'admin_enqueue_scripts', 'load_custom_admin_script' );

