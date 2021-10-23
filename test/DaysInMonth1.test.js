import { Selector } from 'testcafe';

fixture `TestingDateApp`
    .page`http://localhost:8080/UI.html`;

test(`DIM01 - Should_0_When_InputInvalidMonth`, async t=>{

   await t
       .typeText('#month', '0')
       .typeText('#year', '1896')
       .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
       .expect(Selector('#NumberOfDays').innerText).eql('0');
})

test(`DIM02 - Should_31_When_InputMonthContains{1 3 5 7 8 10 12}`, async t=>{

   await t
       .typeText('#month', '1')
       .typeText('#year', '2021')
       .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
       .expect(Selector('#NumberOfDays').innerText).eql('31');
})

test(`DIM03 - Should_29_When_InputMonth2AndLeapYear_YearMod400Eql0`, async t=>{

   await t
       .typeText('#month', '2')
       .typeText('#year', '2000')
       .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
       .expect(Selector('#NumberOfDays').innerText).eql('29');
})

test(`DIM04 - Should_29_When_InputMonth2AndLeapYear_YearMod4Eql0`, async t=>{

   await t
       .typeText('#month', '2')
       .typeText('#year', '1896')
       .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
       .expect(Selector('#NumberOfDays').innerText).eql('29');
})

