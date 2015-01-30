# Shopify Product Filter

*A simple, jQuery based product variant filter for Shopify stores, as seen on [devtees.com](http://devtees.com).*

![img](assets/screenshot.jpg)

## What is it for?

Ever wish you could show your Shopify customers a filtering option on your home or collection page so they can see available sizes without having to click through to the individual product page? Well, I did.

This adds very basic functionality to your Shopify store to filter products based on size, or whatever product variant you wish to filter by.

The filtering menu hides items that are unavailable in the selected variant, and displays the items that are availble in that variant.

## Usage

By default the filter will work with a size variant if that's the only variant your products have available. Otherwise you can pass an option number to pick which variant to filter by.

### Where to put the code

1. Put `snippets/size-filter.liquid` and `snippets/size-filter-dynamic.liquid` into your Shopify `snippets` directory.

2. Put `assets/product-filter.js` into your `assets` directory, and be sure to include it in your theme's `layout/theme.liquid` file in the document `<head>` in script tags. Alternatively, you could instead copy the contents inside the `$(document).ready(function(){...});` and paste it into your existing `scripts.js` file. Also, be sure you are including jQuery in your shop's theme as well.

3. If you are going use the provided default styles, then include `assets/product-filter.css.liquid` in your `assets` directory, and be sure to link to it from your `layout/theme.liquid` file. Alternatively you could simply include the styles in your existing `.css.liquid` file.

4. Next you need to include the `size-filter.liquid` (or `size-filter-dynamic.liquid` if you want a dynamically generated menu; [more on that below](#static-or-dynamic-menu)) in your shop's `templates/index.liquid` file.

### Static or dynamic menu?

As mentioned above, there are two options for generating the menu itself. There is a dynamic option that uses Liquid tags and outputs the available variants in an array, and there is a static option that is hard coded, and you can edit accordingly.

Why in BFE would I want to use a static, hard coded version? Great question. The answer is because you might not like the order that the dynamic version outputs your variants in, and apart from using the `sort` filter to output them alphabetically, there's not much in the way of options there. Personally, for my use on devtees.com as a size filter, I wanted them to appear in logical order, which was impossible dynamically. Hence the hard coded option.

### Styling

I've included a set of styles based on my use at [devtees.com](http://devtees.com). However, if you want to roll your own styles, just ignore the `assets/product-filter.css.liquid` file, and style in your own stylesheet however you like.

Note: the default styles I've provided use Sass, as it's now supported by Shopify css files with the `.css.liquid` extension.

## Limitations

## Resources

- [shopify_theme](https://github.com/Shopify/shopify_theme) - Shopify's CLI tool for directly uploading your locally edited theme files to your shop.

## Contributing

Found a bug? Want to improve the jQuery or Liquid logic? Pull requests welcome!

See the [contributing docs](CONTRIBUTING.md) for contribution guidelines and more ways to contribute.

## License

This project is available freely under the terms of [The MIT License](LICENSE).