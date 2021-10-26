import { Selector } from 'testcafe';

fixture `Test cases which return 31 in Day in Month function`
    .page`http://192.168.56.1:8080/UI.html`;

test(`DIM08 - Should return 31 on April`, async t=>{
   await t
       .typeText('#month', '4')
       .typeText('#year', '1896')
       .click('#checkValid')
       .expect(Selector('#NumberOfDays').innerText).eql('31');
});

test(`DIM09 - Should return 31 on May`, async t=>{
    await t
        .typeText('#month', '5')
        .typeText('#year', '2021')
        .click('#checkValid')
        .expect(Selector('#NumberOfDays').innerText).eql('31');
 });

 test(`DIM11 - Should return 31 on Jul`, async t=>{
    await t
        .typeText('#month', '7')
        .typeText('#year', '1900')
        .click('#checkValid')
        .expect(Selector('#NumberOfDays').innerText).eql('31');
 });

 test(`DIM12 - Should return 31 on Aug`, async t=>{
    await t
        .typeText('#month', '8')
        .typeText('#year', '2021')
        .click('#checkValid')
        .expect(Selector('#NumberOfDays').innerText).eql('31');
 });

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