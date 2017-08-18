var expect = require('chai').expect;

var filterColourOption = '.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article:nth-child(1)';
var blackColourFilter = '.Accordion-wrapper > div > div > div > button:nth-child(1) > span.ValueOption-label';
var whiteColourFilter = '.Accordion-wrapper > div > div > div > button:nth-child(15) > span.ValueOption-label';
var applyFilterButton = '.Refinements-applyButtonWrapper > button';
var filterNumberText = '.Filters-refineButtonContainer > button > span';
var clearFilterButton = 'button.Refinements-clearButton';

export const gotoPage = () => {
    browser.url('/en/tsuk/category/clothing-427/tops-443');
}

export const clickFilterButton = () => {
    browser.click('button=Filter');
}

export const selectFilterOptionColour = () => {
    browser.scroll(filterColourOption);    
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
            browser.scroll(filterColourOption + ' > ' + blackColourFilter);
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
    if (filterNumber == 'no') {
        expect(filterText).to.equal('', 'Expected text to be ""');
    } else {
        expect(filterText).to.equal('(' + filterNumber + ')', 'Expected text to be ""');
    }
}