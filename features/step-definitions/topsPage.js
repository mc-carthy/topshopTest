import * as topsPage from '../../pageObjects/topsPage'

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, topsPage.gotoPage);
    this.Given(/^I filter the product list$/, topsPage.clickFilterButton);
    this.Given(/^I filter by option "Colour"$/, topsPage.selectFilterOptionColour);
    this.Given(/^I select colour 'Black'$/, topsPage.selectColourBlack);
    this.Given(/^I apply these filters$/, topsPage.applyFilter);
    this.Given(/^Filter button has 1 filter$/, topsPage.filterButtonHas1Filter);
    this.Given(/^Filter returns a product list$/, topsPage.returnsProductList);

}