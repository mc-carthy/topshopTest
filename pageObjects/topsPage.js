var expect = require('chai').expect;

var filterColourOption = '#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article:nth-child(1)';
var blackColourFilter = 'div.Accordion-wrapper > div > div > div > button:nth-child(1) > span.ValueOption-label';
var whiteColourFilter = 'div.Accordion-wrapper > div > div > div > button:nth-child(15) > span.ValueOption-label';
var applyFilterButton = '#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.Refinements-applyButtonWrapper > button';
var filterNumberText = '#root > div > div.Main-body > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Filters > div.Filters-row.Filters-refinement > div.Filters-column.Filters-refineButtonContainer > button > span';
var clearFilterButton = '#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.Refinements-header > button.Refinements-clearButton';

export const gotoPage = () => {
    browser.url('/en/tsuk/category/clothing-427/tops-443');
}

export const clickFilterButton = () => {
    browser.click('button=Filter');
}

export const selectFilterOptionColour = () => {
    browser.click(filterColourOption);
}

export const applyFilter = () => {
    browser.click(applyFilterButton);
}

export const returnsProductList = () => {
    browser.$$('a.Product-link').length > 0;
}

export const selectColour = (colour) => {
    switch (colour.toLowerCase()) {
        case 'black':
            browser.click(filterColourOption + ' > ' + blackColourFilter);
            break;
        case 'white':
            browser.scroll(filterColourOption + ' > ' + whiteColourFilter);
            browser.click(filterColourOption + ' > ' + whiteColourFilter);
            break;
    }
}

export const clearFilters = () => {
    browser.click(clearFilterButton);
}

export const filterButtonCheck = (filterNumber) => {
    var filterText = browser.getText(filterNumberText);
    if (filterNumber == 1) {
        expect(filterText).to.equal('(1)', 'Expected text to be ""');
    } else if (filterNumber == 'no') {
        expect(filterText).to.equal('', 'Expected text to be ""');
    }
}