# Shopify Product Filter

*A simple, jQuery based product variant filter for Shopify stores* :shirt: :mag:

:rocket: **DEMO:**  See it in action at ~~**[devtees.com](http://devtees.com).**~~ (note: I'm no longer using this on devtees.com because I switched to a print on demand service that doesn't limit the sizes in stock; but if you have implemented the filter somewhere, let me know and I can add it to the Readme under an examples section!)

![img](assets/screenshot.jpg)

## What is it for?

Ever wish you could show your Shopify customers a filtering option on your home or collection page so they can see available sizes without having to click through to the individual product page? Well, I did.

This adds very basic functionality to your Shopify store to filter products based on size, or whatever product variant you wish to filter by.

The filtering menu hides items that are unavailable in the selected variant, and displays the items that are availble in that variant.

## Usage

By default the filter will work with a size variant if that's the only variant your products have available. Otherwise you can pass an option number to pick which variant to filter by.

### Where to put the code

1. Put [`snippets/size-filter.liquid`](snippets/size-filter.liquid) and [`snippets/size-filter-dynamic.liquid`](snippets/size-filter-dynamic.liquid) into your Shopify `snippets` directory.

2. Put [`assets/product-filter.js`](assets/product-filter.js) into your `assets` directory, and be sure to include it in your theme's `layout/theme.liquid` file in the document `<head>` in script tags. Alternatively, you could instead copy the contents inside the `$(document).ready(function(){...});` and paste it into your existing `scripts.js` file. Also, be sure you are including jQuery in your shop's theme as well.

3. If you are going use the provided default styles, then include [`assets/product-filter.css.liquid`](assets/product-filter.css.liquid) in your `assets` directory, and be sure to link to it from your `layout/theme.liquid` file. Alternatively you could simply include the styles in your existing `.css.liquid` file.

4. Next you need to output the variant options as classnames in your `product-loop.liquid` file so the filter buttons will have something to trigger. Add the following values to the class attribute on your `div.product` or corresponding markup: `js-size-filter {% for variant in product.variants %}{% if variant.available %}size-{{ variant.title }} {% endif %}{% endfor %}`

5. Finally, you need to include the `size-filter.liquid` (or `size-filter-dynamic.liquid` if you want a dynamically generated menu; [more on that below](#static-or-dynamic-menu)). Just use `{% include 'size-filter' %}` to include the filter menu wherever you'd like it to appear. In devtees.com example I've put it in `templates/index.liquid`, but you could instead put it in `templates/collection.liquid` if you wanted it to appear on every collection page. I just wanted it on the frontpage collection. E.g.:

```html
<!-- start featured product -->

  <div class="clearfix helper-section">

    {% include 'size-filter' %}

    {% if collections[settings.frontpage_collection].products.size == 0 %}

    {% else %}
```

### Static or dynamic menu?

As mentioned above, there are two options for generating the menu itself. There is a dynamic option that uses Liquid tags and outputs the available variants in an array, and there is a static option that is hard coded, and you can edit accordingly.

Why in BFE would I want to use a static, hard coded version? Great question. The answer is because you might not like the order that the dynamic version outputs your variants in, and apart from using the `sort` filter to output them alphabetically, there's not much in the way of options there. Personally, for my use on devtees.com as a size filter, I wanted them to appear in logical order, which was impossible dynamically. Hence the hard coded option.

### Styling

I've included a set of styles based on my use at [devtees.com](http://devtees.com). However, if you want to roll your own styles, just ignore the `assets/product-filter.css.liquid` file, and style in your own stylesheet however you like.

Note: the default styles I've provided use Sass, as it's now supported by Shopify css files with the `.css.liquid` extension.

## Limitations

One of the biggest limitations of this filter is that - because of how Shopify product variants work - in order for the filter to work your product variants must be formatted just right, or else the filter will fail. The filter relies on outputing your variant titles to a classname on the product listing, which it looks for to either hide or show when a filter nav button is clicked.

*Consequently you must:*

1. Not include spaces in your variant names
2. Write your variant names as you want them to appear in the filter menu

**PROTIP**: If you need to edit your product variants en masse, you can export your products from the Shopify Admin "Product" dashboard as a CSV file, do a find & replace to mass edit, them import it back into your shop. More on that in the [Shopify docs here](http://docs.shopify.com/manual/your-store/products/product-csv).

## Resources

- [shopify_theme](https://github.com/Shopify/shopify_theme) - Shopify's CLI tool for directly uploading your locally edited theme files to your shop.

## Contributing

Found a bug? Want to improve the jQuery or Liquid logic? Pull requests welcome!

See the [contributing docs](CONTRIBUTING.md) for contribution guidelines and more ways to contribute.

## License

This project is available freely under the terms of [The MIT License](LICENSE).
