var expect = require('chai').expect;

export const gotoPage = () => {
    browser.url('/en/tsuk/category/clothing-427/tops-443');
}

export const clickFilterButton = () => {
    browser.click('button=Filter');
}

export const selectFilterOptionColour = () => {
    browser.click('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article:nth-child(1) > div.Accordion-header.is-padded > header > div > span.RefinementList-label.is-value');
}

export const selectColourBlack = () => {
    browser.click('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > button:nth-child(1) > span.ValueOption-label');
}

export const applyFilter = () => {
    browser.click('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.Refinements-applyButtonWrapper > button');
}

export const filterButtonHas1Filter = () => {
    var filterText = browser.getText('#root > div > div.Main-body > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Filters > div.Filters-row.Filters-refinement > div.Filters-column.Filters-refineButtonContainer > button > span');
    expect(filterText).to.equal('(1)', 'Expected text to be ""');
}

export const returnsProductList = () => {
    browser.$$('a.Product-link').length > 0;
}

export const selectColourWhite = () => {
    var whiteFilter = '#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > button:nth-child(15) > span.ValueOption-label';
    browser.scroll(whiteFilter);
    browser.click(whiteFilter);
}

export const clearFilters = () => {
    browser.click('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.Refinements-header > button.Refinements-clearButton');
}

export const filterButtonHas0Filter = () => {
    var filterText = browser.getText('#root > div > div.Main-body > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Filters > div.Filters-row.Filters-refinement > div.Filters-column.Filters-refineButtonContainer > button > span');
    expect(filterText).to.equal('', 'Expected text to be ""');
}