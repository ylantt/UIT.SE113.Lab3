import { Selector } from 'testcafe';

fixture `Test cases which return 31 in Day in Month function`
    .page`http://localhost:8080/TestingDateApp/UI.html`;

test(`DIM02 - Should return 31 on January`, async t=>{
    await t
        .typeText('#month', '1')
        .typeText('#year', '2021')
        .click('#checkValid')
        // Use the assertion to check if the actual result is equal to the expected one
        .expect(Selector('#NumberOfDays').innerText).eql('31');
});

test(`DIM08 - Should return 31 on March`, async t=>{
   await t
       .typeText('#month', '3')
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