import { Selector } from 'testcafe';

fixture `Test cases which return 31 in Day in Month function`
    .page`http://localhost:8080/TestingDateApp/UI.html`;

test(`DIM14 - Should return 31 on Oct`, async t=>{
   await t
       .typeText('#month', '10')
       .typeText('#year', '2000')
       .click('#checkValid')
       .expect(Selector('#NumberOfDays').innerText).eql('31');
});

test(`DIM16 - Should return 31 on Dec`, async t=>{
    await t
        .typeText('#month', '12')
        .typeText('#year', '2021')
        .click('#checkValid')
        .expect(Selector('#NumberOfDays').innerText).eql('31');
 });