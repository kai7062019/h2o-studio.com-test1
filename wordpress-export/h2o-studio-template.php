<?php
/**
 * H2O Studio WordPress Theme Template
 * 
 * This is a custom WordPress template for H2O Studio website
 * Installation Instructions:
 * 1. Create a new folder "h2o-studio" in wp-content/themes/
 * 2. Copy this file and style.css to that folder
 * 3. Activate the theme from WordPress admin
 * 4. Create pages for: Home, About, Services, Join Us, Privacy, Terms
 * 5. Update the page IDs in the template as needed
 */

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Theme setup
function h2o_studio_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'h2o_studio_theme_setup' );

// Enqueue styles and scripts
function h2o_studio_enqueue_scripts() {
    wp_enqueue_style( 'h2o-studio-style', get_stylesheet_uri() );
    wp_enqueue_script( 'h2o-studio-script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'h2o_studio_enqueue_scripts' );

// Register menus
function h2o_studio_register_menus() {
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'h2o-studio' ),
    ) );
}
add_action( 'init', 'h2o_studio_register_menus' );

// Custom post type for services
function h2o_studio_register_services_post_type() {
    $args = array(
        'label'       => __( 'Services', 'h2o-studio' ),
        'description' => __( 'H2O Studio Services', 'h2o-studio' ),
        'public'      => true,
        'menu_icon'   => 'dashicons-briefcase',
        'supports'    => array( 'title', 'editor', 'thumbnail' ),
        'has_archive' => true,
        'rewrite'     => array( 'slug' => 'services' ),
    );
    register_post_type( 'h2o_service', $args );
}
add_action( 'init', 'h2o_studio_register_services_post_type' );

// Custom post type for team members
function h2o_studio_register_team_post_type() {
    $args = array(
        'label'       => __( 'Team Members', 'h2o-studio' ),
        'description' => __( 'H2O Studio Team', 'h2o-studio' ),
        'public'      => true,
        'menu_icon'   => 'dashicons-groups',
        'supports'    => array( 'title', 'editor', 'thumbnail' ),
        'has_archive' => true,
        'rewrite'     => array( 'slug' => 'team' ),
    );
    register_post_type( 'h2o_team', $args );
}
add_action( 'init', 'h2o_studio_register_team_post_type' );

// Custom post type for case studies
function h2o_studio_register_case_studies_post_type() {
    $args = array(
        'label'       => __( 'Case Studies', 'h2o-studio' ),
        'description' => __( 'H2O Studio Case Studies', 'h2o-studio' ),
        'public'      => true,
        'menu_icon'   => 'dashicons-chart-bar',
        'supports'    => array( 'title', 'editor', 'thumbnail' ),
        'has_archive' => true,
        'rewrite'     => array( 'slug' => 'case-studies' ),
    );
    register_post_type( 'h2o_case_study', $args );
}
add_action( 'init', 'h2o_studio_register_case_studies_post_type' );

// Register custom taxonomies
function h2o_studio_register_taxonomies() {
    register_taxonomy(
        'service_category',
        'h2o_service',
        array(
            'label'        => __( 'Service Categories', 'h2o-studio' ),
            'hierarchical' => true,
            'rewrite'      => array( 'slug' => 'service-category' ),
        )
    );
}
add_action( 'init', 'h2o_studio_register_taxonomies' );

// Add custom theme options
function h2o_studio_customize_register( $wp_customize ) {
    // Add section for H2O Studio settings
    $wp_customize->add_section( 'h2o_studio_settings', array(
        'title'    => __( 'H2O Studio Settings', 'h2o-studio' ),
        'priority' => 30,
    ) );

    // Add setting for company description
    $wp_customize->add_setting( 'h2o_company_description', array(
        'default'           => 'We help brands grow globally with content, creativity, data, and tech.',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'h2o_company_description', array(
        'label'    => __( 'Company Description', 'h2o-studio' ),
        'section'  => 'h2o_studio_settings',
        'type'     => 'textarea',
    ) );

    // Add setting for company email
    $wp_customize->add_setting( 'h2o_company_email', array(
        'default'           => 'info@h2ostudio.com',
        'sanitize_callback' => 'sanitize_email',
    ) );

    $wp_customize->add_control( 'h2o_company_email', array(
        'label'    => __( 'Company Email', 'h2o-studio' ),
        'section'  => 'h2o_studio_settings',
        'type'     => 'email',
    ) );

    // Add setting for company phone
    $wp_customize->add_setting( 'h2o_company_phone', array(
        'default'           => '+1 (555) 000-0000',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'h2o_company_phone', array(
        'label'    => __( 'Company Phone', 'h2o-studio' ),
        'section'  => 'h2o_studio_settings',
        'type'     => 'text',
    ) );
}
add_action( 'customize_register', 'h2o_studio_customize_register' );

// Get company information
function h2o_get_company_info() {
    return array(
        'description' => get_theme_mod( 'h2o_company_description' ),
        'email'       => get_theme_mod( 'h2o_company_email' ),
        'phone'       => get_theme_mod( 'h2o_company_phone' ),
    );
}

// Display services
function h2o_display_services( $limit = -1 ) {
    $args = array(
        'post_type'      => 'h2o_service',
        'posts_per_page' => $limit,
        'orderby'        => 'menu_order',
        'order'          => 'ASC',
    );

    $services = new WP_Query( $args );

    if ( $services->have_posts() ) {
        echo '<div class="services-grid">';
        while ( $services->have_posts() ) {
            $services->the_post();
            ?>
            <div class="service-card">
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="service-image">
                        <?php the_post_thumbnail( 'medium' ); ?>
                    </div>
                <?php endif; ?>
                <h3 class="service-title"><?php the_title(); ?></h3>
                <div class="service-description">
                    <?php the_excerpt(); ?>
                </div>
                <a href="<?php the_permalink(); ?>" class="service-link">
                    <?php _e( 'Learn More →', 'h2o-studio' ); ?>
                </a>
            </div>
            <?php
        }
        echo '</div>';
        wp_reset_postdata();
    }
}

// Display team members
function h2o_display_team( $limit = -1 ) {
    $args = array(
        'post_type'      => 'h2o_team',
        'posts_per_page' => $limit,
        'orderby'        => 'menu_order',
        'order'          => 'ASC',
    );

    $team = new WP_Query( $args );

    if ( $team->have_posts() ) {
        echo '<div class="team-grid">';
        while ( $team->have_posts() ) {
            $team->the_post();
            ?>
            <div class="team-member">
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="team-image">
                        <?php the_post_thumbnail( 'medium' ); ?>
                    </div>
                <?php endif; ?>
                <h3 class="team-name"><?php the_title(); ?></h3>
                <div class="team-bio">
                    <?php the_excerpt(); ?>
                </div>
            </div>
            <?php
        }
        echo '</div>';
        wp_reset_postdata();
    }
}

// Display case studies
function h2o_display_case_studies( $limit = -1 ) {
    $args = array(
        'post_type'      => 'h2o_case_study',
        'posts_per_page' => $limit,
        'orderby'        => 'date',
        'order'          => 'DESC',
    );

    $case_studies = new WP_Query( $args );

    if ( $case_studies->have_posts() ) {
        echo '<div class="case-studies-grid">';
        while ( $case_studies->have_posts() ) {
            $case_studies->the_post();
            ?>
            <div class="case-study-card">
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="case-study-image">
                        <?php the_post_thumbnail( 'medium' ); ?>
                    </div>
                <?php endif; ?>
                <h3 class="case-study-title"><?php the_title(); ?></h3>
                <div class="case-study-excerpt">
                    <?php the_excerpt(); ?>
                </div>
                <a href="<?php the_permalink(); ?>" class="case-study-link">
                    <?php _e( 'Read Case Study →', 'h2o-studio' ); ?>
                </a>
            </div>
            <?php
        }
        echo '</div>';
        wp_reset_postdata();
    }
}

// Handle contact form submissions
function h2o_handle_contact_form() {
    if ( ! isset( $_POST['h2o_contact_nonce'] ) || ! wp_verify_nonce( $_POST['h2o_contact_nonce'], 'h2o_contact_form' ) ) {
        return;
    }

    $name    = sanitize_text_field( $_POST['name'] ?? '' );
    $email   = sanitize_email( $_POST['email'] ?? '' );
    $message = sanitize_textarea_field( $_POST['message'] ?? '' );
    $type    = sanitize_text_field( $_POST['type'] ?? 'general' );

    if ( empty( $name ) || empty( $email ) || empty( $message ) ) {
        wp_die( __( 'Please fill in all fields.', 'h2o-studio' ) );
    }

    $company_info = h2o_get_company_info();
    $to           = $company_info['email'];
    $subject      = sprintf( __( 'New %s Inquiry from %s', 'h2o-studio' ), ucfirst( $type ), $name );
    $body         = sprintf(
        __( "Name: %s\nEmail: %s\nType: %s\n\nMessage:\n%s", 'h2o-studio' ),
        $name,
        $email,
        $type,
        $message
    );

    wp_mail( $to, $subject, $body );

    // Send confirmation email to user
    $user_subject = __( 'We received your inquiry', 'h2o-studio' );
    $user_body    = sprintf(
        __( "Hi %s,\n\nThank you for reaching out to H2O Studio. We have received your inquiry and will get back to you soon.\n\nBest regards,\nH2O Studio Team", 'h2o-studio' ),
        $name
    );

    wp_mail( $email, $user_subject, $user_body );

    wp_safe_remote_post( admin_url( 'admin-ajax.php' ), array(
        'blocking'  => false,
        'sslverify' => apply_filters( 'https_local_ssl_verify', false ),
    ) );
}
add_action( 'init', 'h2o_handle_contact_form' );

// Add widget areas
function h2o_studio_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Footer Widget Area', 'h2o-studio' ),
        'id'            => 'footer-widgets',
        'description'   => __( 'Footer widget area', 'h2o-studio' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'h2o_studio_widgets_init' );

// Excerpt length
function h2o_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'h2o_excerpt_length' );

// Excerpt more
function h2o_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'h2o_excerpt_more' );

// Remove default WordPress admin bar
add_filter( 'show_admin_bar', '__return_false' );

// Security headers
function h2o_add_security_headers() {
    header( 'X-Content-Type-Options: nosniff' );
    header( 'X-Frame-Options: SAMEORIGIN' );
    header( 'X-XSS-Protection: 1; mode=block' );
}
add_action( 'send_headers', 'h2o_add_security_headers' );

// Get the template directory
function h2o_get_template_part( $slug, $name = null ) {
    $templates = array();
    $name      = (string) $name;
    if ( '' !== $name ) {
        $templates[] = "{$slug}-{$name}.php";
    }
    $templates[] = "{$slug}.php";

    locate_template( $templates, true, false );
}

?>
