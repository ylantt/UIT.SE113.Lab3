import { Selector } from 'testcafe';

fixture `TestingDateApp`
    .page`http://localhost:8080/TestingDateApp/UI.html`;

test(`DIM01 - Should_0_When_InputInvalidMonth`, async t=>{

   await t
       .typeText('#month', '0')
       .typeText('#year', '1896')
       .click('#checkValid')
       // Use the assertion to check if the actual result is equal to the expected one
       .expect(Selector('#NumberOfDays').innerText).eql('0');
})