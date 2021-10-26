import { Selector } from 'testcafe';

fixture `Test cases which return 29 in Day in Month function`
    .page`http://localhost:8080/TestingDateApp/UI.html`;

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

