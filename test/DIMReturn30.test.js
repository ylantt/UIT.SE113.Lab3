import { Selector } from 'testcafe';

fixture `Test cases which return 30 in Day in Month function`
    .page`http://localhost:8080/TestingDateApp/UI.html`;

test(`DIM07 - Should return 30 on March`, async t=>{
   await t
       .typeText('#month', '3')
       .typeText('#year', '2000')
       .click('#checkValid')
       .expect(Selector('#NumberOfDays').innerText).eql('30');
});

test(`DIM13 - Should return 30 on Sep`, async t=>{
   await t
       .typeText('#month', '9')
       .typeText('#year', '1896')
       .click('#checkValid')
       .expect(Selector('#NumberOfDays').innerText).eql('30');
});

test(`DIM15 - Should return 30 on Nov`, async t=>{
    await t
        .typeText('#month', '11')
        .typeText('#year', '1896')
        .click('#checkValid')
        .expect(Selector('#NumberOfDays').innerText).eql('30');
 });