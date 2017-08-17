import * as topsPage from '../../pageObjects/topsPage'

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, topsPage.gotoPage);
    this.Given(/^I filter the product list$/, topsPage.clickFilterButton);
    this.Given(/^I filter by option "Colour"$/, topsPage.selectFilterOptionColour);
    this.Given(/^I select colour 'Black'$/, topsPage.selectColourBlack);
    this.When(/^I apply these filters$/, topsPage.applyFilter);
    this.Then(/^Filter button has 1 filter$/, topsPage.filterButtonHas1Filter);
    this.Then(/^Filter returns a product list$/, topsPage.returnsProductList);
    
    this.Given(/^I select colour 'White'$/, topsPage.selectColourWhite);

    this.Given(/^I clear all filters$/, topsPage.clearFilters);
    this.Then(/^Filter button has no filters$/, topsPage.filterButtonHas0Filter);
}