
import { Selector } from 'testcafe';

fixture `TestingDateApp`
    .page`http://192.168.56.1:8080/UI.html`;

test(`IVD01 - Should_Invalid_When_InputDayIs_1_InputMonthIs_0_InputYearIs_2020`, async t=>{

   await t
        .typeText('#day', '1')
        .typeText('#month', '0')
        .typeText('#year', '2020')
        .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
        .expect(Selector('#Result').innerText).eql('false');
})

test(`IVD02 - Should_Invalid_When_InputDayIs_10_InputMonthIs_13_InputYearIs_2021`, async t=>{

   await t
        .typeText('#day', '10')
        .typeText('#month', '13')
        .typeText('#year', '2021')
        .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
        .expect(Selector('#Result').innerText).eql('false');
})

test(`IVD03 - Should_Invalid_When_InputDayIs_0_InputMonthIs_10_InputYearIs_2020`, async t=>{

   await t
        .typeText('#day', '0')
        .typeText('#month', '10')
        .typeText('#year', '2020')
        .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
        .expect(Selector('#Result').innerText).eql('false');
})

test(`IVD04 - Should_Invalid_When_InputDayIs_29_InputMonthIs_2_InputYearIs_2021`, async t=>{

   await t
        .typeText('#day','29')
        .typeText('#month', '2')
        .typeText('#year', '2021')
        .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
        .expect(Selector('#Result').innerText).eql('false');
})
test(`IVD05 - Should_Valid_When_InputDayIs_28_InputMonthIs_2_InputYearIs_2021`, async t=>{

    await t
         .typeText('#day','28')
         .typeText('#month', '2')
         .typeText('#year', '2021')
         .click('#checkValid')
        // Use the assertion to check if the actual result is equal to the expected one
         .expect(Selector('#Result').innerText).eql('true');
 })

