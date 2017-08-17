import * as topsPage from '../../pageObjects/topsPage'

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, topsPage.gotoPage);
    this.Given(/^I filter the product list$/, topsPage.clickFilterButton);
    this.Given(/^I filter by option "Colour"$/, topsPage.selectFilterOptionColour);
    this.Given(/^I select colour '(.+)'$/, topsPage.selectColour);
    this.When(/^I apply these filters$/, topsPage.applyFilter);
    this.Then(/^Filter button has (no|\d+) filters?$/, topsPage.filterButtonCheck);
    this.Then(/^Filter returns a product list$/, topsPage.returnsProductList);
        
    this.Given(/^I clear all filters$/, topsPage.clearFilters);
    }