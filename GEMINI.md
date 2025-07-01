# Project Overview

This is a personal portfolio website built with Jekyll, a static site generator written in Ruby. It is designed to be hosted on GitHub Pages. The website showcases the owner's skills, projects, and contact information.

## Technologies

*   **Jekyll**: The static site generator used to build the website.
*   **Ruby**: The programming language Jekyll is written in.
*   **Liquid**: The templating language used by Jekyll.
*   **HTML**: The markup language for the website.
*   **Sass**: The CSS preprocessor used for styling.
*   **JavaScript**: Used for interactive elements, such as the typing animation on the hero page.
*   **YAML**: Used for data files to separate content from the layout.

## File Structure

*   `_config.yml`: The main configuration file for the Jekyll site. It contains global settings and variables.
*   `Gemfile`: Manages the Ruby gems (dependencies) for the project.
*   `index.markdown`: The main landing page of the website.
*   `_data/`: This directory contains YAML files (`.yml`) that store the data used to populate the website, such as the content for the "About", "Services", and "Contact" sections. This allows for easy content management without having to edit the HTML files directly.
*   `_layouts/`: This directory contains the HTML layouts for the pages.
*   `_posts/`: This directory contains the blog posts.
*   `_sass/`: This directory contains the Sass files for styling.
*   `assets/`: This directory contains the compiled CSS and JavaScript files.

## How to Run the Project Locally

To run the project locally, you need to have Ruby and Bundler installed.

1.  Install the dependencies:
    ```bash
    bundle install
    ```
2.  Run the Jekyll server:
    ```bash
    bundle exec jekyll serve
    ```
The website will be available at `http://localhost:4000`.

## How to Edit Content

The content of the website can be easily edited by modifying the YAML files in the `_data` directory. For example, to change the "About Me" text, you would edit the `_data/about.yml` file. To change the projects, you would edit the `_data/services.yml` file.

The main page layout and structure can be modified in the `index.markdown` file. The overall HTML structure and styling are controlled by the files in the `_layouts` and `_sass` directories, respectively.
