import { Selector } from 'testcafe';

fixture `DayInMonth function - testcase return 28 days`
    .page`http://localhost:8080/TestingDateApp/UI.html`;

test(`DIM05 - Should return 28 on Feb - case year mod 400, year mod 100, year mod 4 are not equal 0`, async t=>{

   await t
       .typeText('#month', '2')
       .typeText('#year', '2021')
       .click('#checkValid')
       .expect(Selector('#NumberOfDays').innerText).eql('28');
});

test(`DIM06 - Should return 28 on Feb - case year mod 400 not equal 0 and year mod 100 equal 0`, async t=>{
    await t
        .typeText('#month', '2')
        .typeText('#year', '1900')
        .click('#checkValid')
        .expect(Selector('#NumberOfDays').innerText).eql('28');
 });